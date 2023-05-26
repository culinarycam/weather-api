var searchForm = document.querySelector("#search-form")
var temp =  document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var cityDate = document.querySelector("#cityDate")
var currentDate = dayjs().format("MM/DD/YYYY")

function getGeo (city) {
// geo api (http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=56888a7e0182e386acab59c0a5ef93ab")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        getWeather(data[0].lat, data[0].lon, city);
        getForecast(data[0].lat, data[0].lon, city);
    });
}


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function getWeather(lat, lon, city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" +lon + "&units=imperial&appid=56888a7e0182e386acab59c0a5ef93ab")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        temp.innerHTML = "temp: " + Math.floor(data.main.temp) + " F";
        humidity.innerHTML = "humidity: " + Math.floor(data.main.humidity) + "%";
        cityDate.innerHTML = city + " " + "(" + currentDate + ")";
        wind.innerHTML = "wind: " + Math.floor(data.wind.speed) + " mph";
    });
}


function getForecast(lat, lon, city) {
// forecast api (api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key})
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=56888a7e0182e386acab59c0a5ef93ab")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("DATA", data);

    });
}



searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var cityEl = document.querySelector("#city");
    var city = cityEl.value.trim();

    getGeo(city);
});