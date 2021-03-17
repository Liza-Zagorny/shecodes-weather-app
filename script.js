//⏰Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentTime = `${currentDay}, ${currentHour}:${currentMinute}`;
let selectCurrent = document.querySelector("#current-time");
selectCurrent.innerHTML = currentTime;

function displayCityNameAndTemp(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let displayedCity = document.querySelector("#current-city");
  displayedCity.innerHTML = cityInput;
  let apiKey = "ef675c90f7a08fdac95db8723fa07244";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
  function showTemp(responce) {
    let tempOutput = Math.round(responce.data.main.temp);
    let displayedTemp = document.querySelector("#temp-value");
    displayedTemp.innerHTML = tempOutput;
  }
  axios.get(apiUrl).then(showTemp);
}
let selectForm = document.querySelector("#search-form");
selectForm.addEventListener("submit", displayCityNameAndTemp);

//🙀Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

//function turnFarenheit(number) {
// return (number * 9) / 5 + 32;
//}
//let selectTemp = document.querySelector("#temp-value");
//console.log(turnFarenheit(selectTemp.value));

//let selectLink = document.querySelector("#farenheit-link");

//selectLink.addEventListener("click", turnFarenheit);

//🙀 Bonus point:
//Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "ef675c90f7a08fdac95db8723fa07244";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showCurrentLocationTemp);
  function showCurrentLocationTemp(responce) {
    let currentGPSLocation = responce.data.name;
    let tempAtCurrentLocation = Math.round(responce.data.main.temp);
    alert(currentGPSLocation);
    alert(tempAtCurrentLocation);
  }
}

let CurrentLocationButton = document.querySelector("#current-location");
CurrentLocationButton.addEventListener(
  "click",
  navigator.geolocation.getCurrentPosition(showPosition)
);
