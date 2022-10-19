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
- Days options: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday` use `Due Date` to find the nearest date

# Screenshots
![image](data:image/png;base64, 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uPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPoO6Vhryx6+sSa9Yk16xJr1iTXrEmvWJNesSa9Yk16xJr1iTXrEmvWJNesSa9Yk16xJr1iTXrEmvWJNesSaPmpa0R2tkBc2DM1YjO4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+u4+hnX6M0pb3H13H13H13H13H13H13H13H13H13H13H13H13H13H13H13H13H13H13H13H0w4RRhrjuPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPruPq2ta0/5/PZIiuSL0dbWtKU5rF5hjU0e6AB8az3HfitfxdTOZ5hJmyzUORmeYxZMXSX+DWlK04qCOOPa7Rn4g/tW/FY9lv+4dRcYIyLJGKX34vlEcDfQCyNyGNHOyDH5TFc1jQThQ+loJgMLK0fwwiszmlJA341nuO/Fa/i6unz7LTuX0v6iPsOs4vSz4TH8t/xR/at+Kx7Lf8AcL2GnK83ag61B1qDrUHVozNl1LqfGs9x34rX8XUZ04wiQLfMKE6bYOAWwWN8Jj+W/wCKP7VvxWPZb/t9zdl/H16461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHTY49XXqV1x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjpgcetXeXTYBly5t1s7H3nLW29cda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOmBxq0c51x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjoYYerNta6461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x0wOPVlqtdcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOtcda461x1rjrXHWuOrbbbacW/2Cz3HfitfxdWH4njM4ZlxMnmeI4xCXYuVG/CY/lv8Aij+1b8Vj2W/8Ms9x34rX8XUBE9RseOnfTJKK6kZCTCtyfwmP5b/ij+1b8Vj2W/7ff3P+Po8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJXkq2wq26+5eSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJVlhVn1ceSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJVlhVlK8eSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJTdhTdlLaeSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJVlpVllti8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5K8leSvJXkryV5Kt+rj/AKvyPO0YZcdq05R1qxyj8qEMeMA6zKgO2O3qr7NP4232X8/T/pqYjri2Hr7YmPqGw1ddNxF8lJs3VrBz9zQ7pLuNSlbRWG8eFfEjG9r/AEze5bZx9WyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssrZZWyytllbLK2WVssq26l1OafJrWlPurWlP8ATks4QzGGODi1gwQwz2qTMgba+OQ3MyWg8apOXcLIZYsdn5Il55hpydmxmmGRzXTbR23hgHjHaOOPf6Yai41h111pmJixra2s2x4Fj7j9rMTFjUray3GRrT17zdYeJrRm2v8A+EX/xABKEAACAgECAgYGBAgNBAIDAAABAgADBBGR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')