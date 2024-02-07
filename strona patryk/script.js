const img = document.querySelector('img.weather_img');
const temp = document.querySelector('p.temp');
const weatherDescription = document.querySelector('p.weather_description');
const feelsLike = document.querySelector('span.feels_like');
const humidity = document.querySelector('span.humidity');
const pressure = document.querySelector('span.pressure');
const clouds = document.querySelector('span.clouds');
const windSpeed = document.querySelector('span.wind_speed');
const rain = document.querySelector('span.rain');



const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiCity = "Rome";
const apiKey = "&appid=6dd3028f1d172323e84f8ea0cf154742";
const apiUnits = "&units=metric";
const apiLang = "&lang=pl";
const URL = apiLink + apiCity + apiKey + apiLang + apiUnits;

function getWeather(){
    axios.get(URL).then(response => {
        console.log(response.data);
        pressure.textContent = `${response.data.main.pressure} hPa`;
        const iconCode = response.data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        img.src = iconUrl;
        weatherDescription.textContent = `${response.data.weather[0].description}`;
        temp.textContent = `${response.data.main.temp}`;
        feelsLike.textContent = `${response.data.main.feels_like}°C `;
        humidity.textContent = `${response.data.main.humidity}%`;
        clouds.textContent = `${response.data.clouds.all}%`;
        windSpeed.textContent = `${response.data.wind.speed * 3.6}km/h`;
       


    })
}

getWeather();