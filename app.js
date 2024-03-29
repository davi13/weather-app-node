const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const address = process.argv[2]



// const url = 'https://api.darksky.net/forecast/62b6f3d89534c3cabdee2373423dbd76/37.8267,-122.4233?';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log(`Unable to connect to weather service`);
//     } else if (response.body.error) {
//         console.log(`Unable to connect to weather service`);
//     } else {
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} out there`);
//         console.log(`There is a  ${response.body.currently.precipProbability}% chance of rain`);
//     }
// })
if (!address) {
    console.log('A location must be provide')

} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(chalk.inverse.red('Error: ', error));
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(chalk.inverse.red('Error: ', error));
            }
            console.log(chalk.inverse.green(location));
            console.log('Data: ', forecastData);
        })
    })
}



