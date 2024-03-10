function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = '2e770f879b2a9ffe782ff4e2fde2c9ca';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            showWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather:', error);
        });
}

function showWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    var temperature = Math.round(data.main.temp - 273.15); 
    var description = data.weather[0].description;
    var cityName = data.name;
    weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p>
                             <p>Description: ${description}</p>
                             <p>City: ${cityName}</p>`;
}

// Add event listener to the button
document.getElementById('weatherBtn').addEventListener('click', getWeather);
