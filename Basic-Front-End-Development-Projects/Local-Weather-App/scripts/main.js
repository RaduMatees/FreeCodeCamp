$(document).ready(function() {

  var latitude = 0
  var longitude = 0

  turnGPSOn()

  function turnGPSOn() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude
        longitude = position.coords.longitude
        renderHTML()
      })
    }
  }

  function renderHTML() {
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&lat=' + latitude, function(json) {
      $('#location').html(json.name)
      $('#temperature').html(Math.round(json.main.temp) + '°C')
      var weather = json.weather[0].main
      $('#weather').html(weather)
      var renderIcon = json.weather[0].icon
      renderIcon = "<img src='" + renderIcon + "'>"
      $('#icon').html(renderIcon)
      changeBackground(weather)
    })
  }

  function changeBackground(weatherLike) {
    if (weatherLike == 'Clouds') {
      $('.my-img-container').addClass('img-clouds')
    } else if (weatherLike == 'Rain') {
      $('.my-img-container').addClass('img-rainy')
    } else if (weatherLike == 'Clear') {
      $('.my-img-container').addClass('img-clear')
    } else if (weatherLike == 'Mist') {
      $('.my-img.container').addClass('img-mist')
    } else if (weatherLike == 'haze') {
      $('.my-img.container').addClass('img-haze')
    }
  }

})
