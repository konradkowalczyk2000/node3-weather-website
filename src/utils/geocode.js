const request = require('request')

const geocode = (address, callback) => {
     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia29ucmFkMjAwMCIsImEiOiJja3EyaGJvY2gwZG92Mm5sbnM0d2Rkcnp6In0.Vl1bdPk2lIdLom0haKMimA&limit=1'
     //const url = 'http://api.weatherstack.com/current?access_key=9873fb0b11aed312fa242905395c2ffb&query=37.8267,-122.4233'
     
     request({url: url, json: true}, (error, response) => {
     if (error)
     {
        callback('unable to find connection', undefined)
     } else if (response.body.features.length === 0) {
        callback('unable to find location', undefined)
     } else {
        callback(undefined,{
           latitude: response.body.features[0].center[1],
           longitude: response.body.features[0].center[0],       
           location: response.body.features[0].place_name
        })
     }
    })
}

module.exports = geocode