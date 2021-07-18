const request = require('request')

const forecast = (latitude, longitude , callback) => {
//     const url = 'http://api.weatherapi.com/v1/current.json?key=66c2ddd6cf5e488285c101452211806&q=' + latitude + ',' + longitude
     const url = 'http://api.weatherstack.com/current?access_key=9873fb0b11aed312fa242905395c2ffb&query=' + latitude + ',' + longitude
     request({url: url, json: true}, (error, response) => {
     if (error)
     {
        callback('unable to find connection', undefined)
     } else if (response.body.error) {
        callback('unable to find forecast', undefined)
     } else {
        callback(undefined,{
           temp: response.body.current.temperature,
           wind: response.body.current.wind_dir,       
           wind_speed: response.body.current.wind_speed              
        })
     }
    })
}

module.exports = forecast