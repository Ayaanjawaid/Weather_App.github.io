// Get DOM elements
const cityName = document.getElementById('cityName');
//const cloud_pct = document.getElementById('cloud_pct');
const temp = document.getElementById('temp');
const feels_like = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const wind_degrees = document.getElementById('wind_degrees');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const submit = document.getElementById('submit');
const city = document.getElementById('city');

const getWeather = async (cityName) => {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5d88009dfbmsh507e1c1687cd62fp197165jsnc0947036d852',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse the response as JSON

    console.log(result);

    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// Initial weather for "Delhi"
getWeather('Delhi');


