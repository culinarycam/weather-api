//var searchHistory = [];
//var weatherApiRootUrl = "https://openweathermap.org";
//var weatherApiKey = "56888a7e0182e386acab59c0a5ef93ab";

//var searchForm = document.querySelector("#search-form");
//var searchInput = document.querySelector("#search-input");
//var todayContainer = document.querySelector("#today");
//var forcastContainer = document.querySelector("#forcast");
//var searchHistoryContainer = document.querySelector("#history");

//timezones
//
//

//function renderSearchHistory() {
    //searchHistoryContainer.innerHTML = "";

    //for (var i = searchHistory.length - 1; i >= 0; i++) {
        //var btn = document.createElement("button");
        //btn.setAttribute("type", "button");
        //btn.setAttribute("aria-controls", "button");
        //btn.classList.add("history-btn", "btn-history");

        //btn.setAttribute("data-search", searchHistory[i]);
        //btn.textContent = searchHistory[i];
        //searchHistoryContainer.append(btn);
    //}
//}

// Function to make an API request and save the response in local storage
function fetchWeatherData() {
    // Your OpenWeather API key
    const apiKey = '56888a7e0182e386acab59c0a5ef93ab';
  
    // Make a request to the OpenWeather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=YOUR_LOCATION&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        // Save the weather data in local storage
        localStorage.setItem('weatherData', JSON.stringify(data));
        console.log('Weather data saved in local storage:', data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  // Check if weather data exists in local storage
  const weatherData = localStorage.getItem('weatherData');
  if (weatherData) {
    console.log('Weather data found in local storage:', JSON.parse(weatherData));
  } else {
    console.log('Weather data not found in local storage. Fetching from API...');
    fetchWeatherData();
  }
  