$(document).ready(function() {
  firstQuote()
  change()
})

function change() {
  $('#new-quote-btn').on('click', changeColors)
  $('#new-quote-btn').on('click', changeQuote)
}

function changeColors() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  $('.my-body-background').css('background-color', randomColor)
  $('.my-area').find('h2').css('color', randomColor)
  $('.my-area').find('h4').css('color', randomColor)
  $('#new-quote-btn').css('background-color', randomColor)
}

function changeQuote() {
  $.ajaxSetup ({cache:false})

  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en', function(json) {
    $('#quote').html("\"" + json.quoteText + "\"")
    $('.my-area').find('h4').html(json.quoteAuthor)
  })
}

function firstQuote() {
  $.ajaxSetup ({cache:false})

  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en', function(json) {
    $('#quote').html("\"" + json.quoteText + "\"")
    $('.my-area').find('h4').html(json.quoteAuthor)
    $('.my-area').show('slow')
  })
}
