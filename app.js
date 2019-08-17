

const request = require('request');

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

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Market%20Street%20and%20Fremont%20Street.json?types=address&proximity=-122.39738575285674,37.792514711136945&access_token=pk.eyJ1IjoiZGF2aTEzIiwiYSI6ImNqemVqZ3FlOTAyeHUzbXFrbno5aTR1dTYifQ.Kp4gmUGKRfyj30HN2z0X3A';
// request({ url: geocodeUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log(`Unable to connect to location service`);
//     } else if (response.body.features.length === 0) {
//         console.log(`Unable to find to location`);
//     }
//     else {
//         console.log(`Latitud: ${response.body.features[0].center[0]}`);
//         console.log(`Longitud: ${response.body.features[0].center[1]}`);
//     }



// })

const geocode = (address, callback) => {
    //const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?types=address&proximity=-122.39738575285674,37.792514711136945&access_token=pk.eyJ1IjoiZGF2aTEzIiwiYSI6ImNqemVqZ3FlOTAyeHUzbXFrbno5aTR1dTYifQ.Kp4gmUGKRfyj30HN2z0X3A`;
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Market%20Street%20and%20Fremont%20Street.json?types=address&proximity=-122.39738575285674,37.792514711136945&access_token=pk.eyJ1IjoiZGF2aTEzIiwiYSI6ImNqemVqZ3FlOTAyeHUzbXFrbno5aTR1dTYifQ.Kp4gmUGKRfyj30HN2z0X3A';

    request({ url: url, json: true }, (error, response) => {
        console.log(response.body.features.length);
        if (error) {
            callback('Unable to connect to location service', undefined);
        } else if (response.body.features.length === 0) {
            console.log(response.body.features.length);
            callback('Unable to find to location ,Try another seach', undefined)

        }
    })
}
geocode('new york', (error, data) => {
    console.log(`Error: ${error}`)
    console.log(`Data: ${data}`)
})