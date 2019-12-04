//          **  const api key **


// *** condition to be implemented after search form




function fetchWeather(city, countryCode = null) {
    let weatherUrl;
    if (countryCode) {
        weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=imperial&APPID=${apiKey}`;
    } else {
        weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${apiKey}`;
    }
    fetch(weatherUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(object){

        const {list} = object
        const indexReturned = list.findIndex(function(obj, index, array) {
            
            let d;
            d = new Date()
            return d.getDate() !== parseInt(obj.dt_txt.split('-')[2].split(' ')[0]); 
        })
        addWeather(list[indexReturned + 4], city, countryCode);
    })
}





