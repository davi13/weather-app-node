const request = require('request');
const geocode = require('./utils/geocode');

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


geocode('paris', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})