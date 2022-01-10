
  
const request = require('request')
const geocode = (address, callback) => {
    const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGV2YW1wYXJpa2giLCJhIjoiY2t5M3V3cGRnMDRqcTJ3bnRpZGk4d2hnNSJ9.gqBCHMQI2LIkR-dz6uvwDw&limit=1'
    request({url: mapUrl, json: true}, (error, response) => {
            if (error) {
                callback('Unable to connect to map services!', undefined)
                // console.log('Unable to connect to map services!')
            } else if(!response.body.features) {
                callback('Unable to find location on map services!', undefined)
                // console.log('error message: ',response.body.message, ' location')
            } else {
                callback(undefined, {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                })
    
                // const latitude = response.body.features[0].center[1]
                // const longitude = response.body.features[0].center[0]
        
                // console.log(latitude,longitude)
            }
        })
    }


module.exports = geocode