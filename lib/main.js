const { Client } = require("@notionhq/client");
require("dotenv").config();
const calcNextDueDate = require("./recurring-tasks.js");
const logger = require('./logger.js');

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

const hookInterval = +process.env.HOOK_INTERVAL;

setInterval(findAndUpdateRecurringTasks, hookInterval);

async function findAndUpdateRecurringTasks() {
  logger.info("Fetching tasks from Notion DB...");
  const tasks = await getTasksFromNotionDatabase();
  
  for (const task of tasks) {
    const pageId = task.id;
    const dueDate = task.properties["Due Date"]?.date?.start;
    const repeat = task.properties["Repeat"]?.multi_select?.map(({ name }) => name);

    if (!(pageId && dueDate && repeat && repeat.length)) {
      logger.info(`Invalid task, details: pageId=${pageId}, dueDate=${dueDate}, repeat=${repeat}`);
      continue;
    }

    const {isError, errors, nextDueDate } = calcNextDueDate(repeat, new Date(dueDate));

    if (isError) {
      logger.info(...errors);
      continue;
    }

    await notion.pages.update({
      page_id: pageId,
      properties: {
        "Done": {
          checkbox: false,
        },
        "Due Date": {
          date: {
            start: nextDueDate.toISOString().slice(0, 10),
          }
        },
        "Repeat": {
          multi_select: {
            is_not_empty: true,
          }
        }
      },
    }).catch(error => {
      logger.info(error);
    });
  }
}

/**
 * Gets tasks from the database.
 *
 * @returns {Promise<Array<{ pageId: string, status: string, title: string }>>}
 */
async function getTasksFromNotionDatabase() {
  const pages = [];
  let cursor = undefined;

  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Done",
        checkbox: {
          equals: true,
        },
      }, 
      start_cursor: cursor,
    });

    pages.push(...results);

    if (!next_cursor) {
      break;
    }

    cursor = next_cursor;
  }

  logger.info(`${pages.length} pages successfully fetched.`);

  return pages;
}
 