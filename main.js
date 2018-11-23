
$(document).ready(function() {
  getURL();



function getURL() {
  var url = ("https://api.darksky.net/forecast/bbf75f07080e69bda9f8590cfb4efbed/49.85, 24.0166666667");
  //console.log(url);
  getJson(url);
}

function getJson(url) {
  //started getJson;
  $.ajax({
      format: "jsonp",
      dataType: "jsonp",
      url: url,
      success: function(json) {

          fahrenheit_to_сelsius(json.currently.temperature);
        $("#weather-current").html((temperature_in_celsius.toFixed(1))+" °");
        $("#weather-high").html("High: "+Math.round(json.daily.data[0].temperatureMax)+"°");
        $("#weather-low").html("Low: "+Math.round(json.daily.data[0].temperatureMin)+"°");
        //setBackground(json.currently.icon);
      }

    })

  }

setInterval(function () {
}, 10000);
})

function fahrenheit_to_сelsius(temperature_in_fahrenheit) {
    this.temperature_in_celsius = (temperature_in_fahrenheit - 32) / 1,8;
}
