const request = require('request');

const url = 'https://api.darksky.net/forecast/62b6f3d89534c3cabdee2373423dbd76/37.8267,-122.4233?';

request({ url: url, json: true }, (error, response) => {

    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} out there`);
    console.log(`There is a  ${response.body.currently.precipProbability}% chance of rain`);
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Market%20Street%20and%20Fremont%20Street.json?types=address&proximity=-122.39738575285674,37.792514711136945&access_token=pk.eyJ1IjoiZGF2aTEzIiwiYSI6ImNqemVqZ3FlOTAyeHUzbXFrbno5aTR1dTYifQ.Kp4gmUGKRfyj30HN2z0X3A';
request({ url: geocodeUrl, json: true }, (error, response) => {
    console.log(`Latitud: ${response.body.features[0].center[0]}`);
    console.log(`Longitud: ${response.body.features[0].center[1]}`);
})