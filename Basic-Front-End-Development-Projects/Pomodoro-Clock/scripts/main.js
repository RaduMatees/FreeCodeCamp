$(document).ready(function(){

  $('.break .minus').on('click', function(){
    var content = parseInt($('.break .modifiers-time').text())
    $('.break .modifiers-time').html(content-1)
    if (content <= 0){
      $('.break .modifiers-time').html(0)
    }
  })

  $('.break .plus').on('click', function(){
    var content = parseInt($('.break .modifiers-time').text())
    $('.break .modifiers-time').html(content+1)
    if (content >= 10){
      $('.break .modifiers-time').html(10)
    }
  })

  $('.session .minus').on('click', function(){
    var content = parseInt($('.session .modifiers-time').text())
    $('.session .modifiers-time').html(content-5)
    if (content <= 5) {
      $('.session .modifiers-time').html(5)
    }
  })

  $('.session .plus').on('click', function(){
    var content = parseInt($('.session .modifiers-time').text())
    $('.session .modifiers-time').html(content+5)
    if (content >= 60) {
      $('.session .modifiers-time').html(60)
    }
  })

})

function clock(){
  setInterval(function(){
    alert('bruh')
  }, 3000)
}
