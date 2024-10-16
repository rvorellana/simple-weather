# Author: Raimundo Orellana

## General Considerations
The provided API key (free subscription) only allows access to hourly weather forecasts with a three-hour interval. Consequently, daily forecast values are calculated based on the hourly data.
The search functionality was not developed, the structure and the main requirements were prioritized.

## Program Execution
I used the react framework, as it was required. It assumes node is installed.

To run the program:

1. Install yarn: `npm install yarn`
2. Install packages `yarn`
3. Start the application: `yarn start`

Make sure to place the API key in a `.env` file with the variable name `REACT_APP_OPENWEATHER_API_KEY`.


`REACT_APP_OPENWEATHER_API_KEY=<your_api_key_here>`

