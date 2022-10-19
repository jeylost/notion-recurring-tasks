# Description
Check tasks with checked `Done` and if it's recurring task(`Repeat` and `Due Date` isn't empty) then change `Due Date` according to selected `Repeat` and uncheck `Done`

# Requirements
1. Obtain Notion API Key and connect it to database. Official guide [here]https://developers.notion.com/docs/getting-started)
2. Database should have `Done`(checkbox), `Due Date`(date), `Repeat`(multi select: `Daily`, `Monthly`, `Yearly`, `Quarterly`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`) properties
3. Docker or Node.js installed

# Steps
1. `$ cp .env.example .env`
2. fill .env with your data
2. `$ yarn start`

# Use Cases
- If `Daily` specified everything else is ignored. Will be ALWAYS tomorrow
- If `Monthly`, `Yearly`, `Quarterly` uses `Due Date` and add 1, 12, 3 months respectfully. Days options doesn't work
- Days options: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday` use `Due Date` to find the nearest date. Several options can be used at once