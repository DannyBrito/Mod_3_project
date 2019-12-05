//          **  const api key **
// const weatherContainer = document.getElementById('weather-container')
// *** condition to be implemented after search form

function fetchWeather(city, countryCode = null) {
    let weatherUrl;
    let cityFormatted = city.split(' ');
    // debugger;
    cityFormatted = cityFormatted.filter(city => city.length >= 1)
    if ( cityFormatted.length >2 && cityFormatted[cityFormatted.length - 1].toLowerCase() === 'city' ) {
        cityFormatted.pop();
    }
    cityFormatted = cityFormatted.join('+');
        
        if (countryCode) {
            weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityFormatted},${countryCode}&units=imperial&APPID=${apiKey}`;
        } else {
            weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityFormatted}&units=imperial&APPID=${apiKey}`;
        }

        fetch(weatherUrl)
            .then(function(response){
                return response.json()
            })
            .then(function(object){
            debugger;
            const {list} = object

            //filters the weather prediction for the following day for noon in specific
            const indexReturned = list.findIndex(function(obj, index, array) {
            let d;
            d = new Date()
            return d.getDate() !== parseInt(obj.dt_txt.split('-')[2].split(' ')[0]); 
            })

            const nextDayNoon = list[indexReturned + 3]
            
            filterUserCloth(nextDayNoon)

            weatherContainer.innerHTML = '';
        
            // renders weather info on weather container
            addWeather(nextDayNoon, cityFormatted, countryCode);
            })
            .catch(function(error) {
                weatherContainer.innerHTML = `<h6>Sorry we could not process your request. Maybe something was spelled incorrectly or we don't handle weather for that area?</h6>`
                console.log(error)
            })
}





