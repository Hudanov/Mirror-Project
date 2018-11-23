
$(document).ready(function() {
  getURL();



function getURL() {
  var url = ("https://api.darksky.net/forecast/bbf75f07080e69bda9f8590cfb4efbed/49.85, 24.0166666667");
  //console.log(url);
  getJson(url);
}

function getJson(url) {
  //console.log("started getJson with this url: " + url);
  $.ajax({
      format: "jsonp",
      dataType: "jsonp",
      url: url,
      success: function(json) {
        //console.log("great success");
        $("#weather-current").html(Math.round(json.currently.temperature)+"°");
        $("#weather-high").html("High: "+Math.round(json.daily.data[0].temperatureMax)+"°");
        $("#weather-low").html("Low: "+Math.round(json.daily.data[0].temperatureMin)+"°");
        //setBackground(json.currently.icon);
      }

    })

  }

setInterval(function () {
}, 10000);
})
