const weatherContainer = document.getElementById('weather-container');

function addWeather(weatherObject, city) {
    let cityFormatted = city.replace('+', ' ');
    weatherHTML = `
    <h5>Weather in ${cityFormatted} for (date)</h5>
    <h6>Temperature: ${weatherObject.main.temp}&#176F</h6>
    <h6>Humidity: ${weatherObject.main.humidity}%</h6>
    `
    weatherContainer.insertAdjacentHTML('beforeend', weatherHTML);
}