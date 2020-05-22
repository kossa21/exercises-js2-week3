/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

var btnEl = document.querySelector("button");
btnEl.addEventListener("click", getTemperature  );

function getTemperature(event){
    var latitude = document.querySelector("#latitude").value;
    var longitude = document.querySelector("#longitude").value;

    var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;

    var result;
    
    fetch(url)
        .then(response => response.json())
        .then(function(data){
            var temperature = data.main.temp;
            document.querySelector("h3").innerHTML = "The current temperature is "+temperature;
        });

    event.preventDefault();
}


