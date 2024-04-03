# Notion Recurring Tasks
Check tasks with checked `Done` and if it's recurring task(`Repeat` and `Due Date` isn't empty) then change `Due Date` according to selected `Repeat` and uncheck `Done`

## Prerequisites
1. Obtain Notion API Key and connect it to database. Official Notion guide [Getting Started](https://developers.notion.com/docs/getting-started).
2. Database should have properties:
   -  `Done`(checkbox)
   -  `Due Date`(date)
   -  `Repeat`(multi-select: `Daily`, `Monthly`, `Yearly`, `Quarterly`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`)
3. Docker or Node.js installed.

## Steps to Run
1. Copy the environment file: `cp .env.example .env`.
2. Fill in the `.env` file with your data.
3. Start the script: `yarn start`.

## Behavior
- Daily: The Due Date is set to the next day, regardless of other settings.
- Monthly/Quarterly/Yearly: The script updates the Due Date by adding 1, 3, or 12 months respectively. This adjustment ignores any day-specific selections.
- Day-Specific Options: For days of the week (Monday through Sunday), the script calculates the nearest future date matching the specified day(s). It's possible to select multiple days.
