$(document).ready(function() {
  changeColors()
})

function changeColors() {
  $('#new-quote-btn').on('click', function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('.my-body-background').css('background-color', randomColor)
    $('.my-area').find('h2').css('color', randomColor)
    $('.my-area').find('h4').css('color', randomColor)
    $('#new-quote-btn').css('background-color', randomColor)
  })
}
