const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=72dc5ee661cf386c6c8555d25fe2b346&query='+latitude+','+longitude+'&units=f'

    request({url: weatherUrl, json: true}, (error, response) => {
        // const data = JSON.parse(response.body)
        // console.log(response)
        if (error) {
            // console.log('Unable to connect to weather services!')
            callback('Unable to connect to weather services!', undefined)
        } else if(response.body.error) {
            // console.log('error: ',response.body.error.info)
            callback('Unable to find weather services on current location!', undefined)
        }else {
            // console.log(response.body.current.weather_descriptions[0], '. It is currently ', response.body.current.temperature, ' degrees out. It feels like ', response.body.current.feelslike ,' degrees out.')
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like '+ response.body.current.feelslike +' degrees out.')
        }
    })
}

module.exports = forecast