const weatherContainer = document.getElementById('weather-container');

function addWeather(weatherObject, city) {
    // let cityFormatted = city.replace('+', ' ');
    weatherHTML = `
    <h5>Weather in ${cityFormatted(city)}, Tomorrow!</h5>
    <p>Temperature: ${weatherObject.main.temp}&#176F</p>
    <p>Humidity: ${weatherObject.main.humidity}%</p>
    <p>Wind Speed: ${weatherObject.wind.speed}MPH</p>
    <p>${weatherInfo(weatherObject.weather)}</p>
    `
    weatherContainer.insertAdjacentHTML('beforeend', weatherHTML);
}

function cityFormatted(city) {
    let cityArr = city.split('+');
    return cityArr.map(function(word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(" ");
}

function weatherInfo(weatherArray) {
    let weatherString = "";
    weatherArray.forEach(function(element){
        weatherString += `${element.main} - ${element.description}`
    })
    return weatherString;
} 