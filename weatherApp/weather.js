const tempDOM = document.getElementById('temp');
const cityDOM = document.getElementById('city');
const descriptionDOM = document.getElementById('description');
const search = document.getElementById('search');
const unitSign = document.getElementById('unitSign');
const icon = document.getElementById('icon');
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=d428c153f8cd2b4e65ab9f2e12958a87';
let units = 'metric';
let unit = '°C';
let cityURL = 'bristol,uk';
let iconCode = '';

function changeCity(city, country) {
  cityDOM.textContent = `${city}, ${country}`;
}

function changeTemp(temp) {
  if (units === 'metric') {
    unit = '°C';
  } else if (units === 'imperial') {
    unit = '°F';
  }
  tempDOM.textContent = `${temp} ${unit}`;
}

function changeDescription(description) {
  iconCode = description.icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconCode}.png`;
  descriptionDOM.textContent = `${description.main}`;
  icon.src = iconURL;
}

function getWeather() {
  const fullURL = `${apiURL}${cityURL}&units=${units}${apiKey}`;

  fetch(fullURL, { mode: 'cors' })
    .then(response => {
      return response.json();
    })

    .then(response => {
      changeCity(response.name, response.sys.country);
      changeTemp(response.main.temp);
      changeDescription(response.weather[0]);
    });
}

function searchLocation() {
  cityURL = search.value;
  getWeather();
}

/* Below is another method using an async function 
  async function getWeather() {
  const fullURL = `${apiURL}${cityURL}&units=${units}${apiKey}`;

  const res = await fetch(fullURL, { mode: 'cors' });
  res.json().then(response => {
    changeCity(response.name, response.sys.country);
    changeTemp(response.main.temp);
    changeDescription(response.weather[0]);
  });
}
 */

function changeUnit() {
  if (units === 'metric') {
    units = 'imperial';
    unit = '°F';
  } else if (units === 'imperial') {
    units = 'metric';
    unit = '°C';
  }
  getWeather();
}

getWeather();

document.getElementById('submit').addEventListener('click', searchLocation);
unitSign.addEventListener('click', changeUnit);
