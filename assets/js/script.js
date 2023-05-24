var key = '56888a7e0182e386acab59c0a5ef93ab';

function weatherForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + key)  
    .then(function(resp) {
        return resp.json() 
    })
    .then(function(data) {
        console.log('--->'+(JSON.stringify(data)));
        drawForecast(data);
    })
    .catch(function() {
        // catch any errors
    });
}

function drawForecast( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description; 
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name+' '+d.sys.country;
}

//Event Listeners on button click
document.addEventListener("DOMContentLoaded", () => {
    // Handling button click
    document.querySelector(".button-search").addEventListener("click", () => {
        var searchedCity = document.querySelector('.text-search');
        console.log(searchedCity.value);
        if(searchedCity.value){
            weatherForecast(searchedCity.value);
        }       
   }) 
 });

