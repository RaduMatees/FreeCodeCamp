$(document).ready(function(){

  changeModifiers()
  startStopClock()

})

var startOrStop = true
var work = true
var timer // this is the timer

function changeModifiers() {

  $('.break .minus, .break .plus, .session .minus, .session .plus').on('click', function() {
    var content = parseInt($(this).parent().siblings('.modifiers-time').text())
    // for class break
    if ($(this).parent().parent().hasClass('break')){
      if ($(this).hasClass('minus')){
        $('.break .modifiers-time').html(content-1)
        if (content <= 1){
          $('.break .modifiers-time').html(1)
        }
      }
      if ($(this).hasClass('plus')){
        $('.break .modifiers-time').html(content+1)
        if (content >= 10){
          $('.break .modifiers-time').html(10)
        }
      }
    }
    // for class session
    if($(this).parent().parent().hasClass('session')){
      if ($(this).hasClass('minus')){
        $('.session .modifiers-time').html(content-5)
        if (content <= 5) {
          $('.session .modifiers-time').html(5)
        }
      }
      if ($(this).hasClass('plus')){
        $('.session .modifiers-time').html(content+5)
        if (content >= 60) {
          $('.session .modifiers-time').html(60)
        }
      }
    }
  })

}

function startStopClock() {
  $('.clock').on('click', function() {
    if (startOrStop) {startTimer()}
    else {
      startOrStop = true
      clearInterval(timer)
    }
  })
}

function startTimer(){
  startOrStop = false
  var screenTime = $('#clock-text').text()
  var seconds = parseInt(screenTime.substr(screenTime.length-2))
  var minutes = parseInt(screenTime.substr(0, screenTime.length-3))

  timer = setInterval(function() {
    // format seconds with 0 before, in case of 1 digit
    var minutesString = minutes.toString()
    var secondsString = seconds.toString()
    if (secondsString.length === 1) {
      secondsString = "0" + secondsString
    }
    // append changes to screen
    $('#clock-text').html(minutesString + ":" + secondsString)
    // decrement seconds and minutes
    seconds -= 1
    if (seconds === -1) {
      seconds = 59
      minutes -= 1
    }
    if (minutes === -1) {
      clearInterval(timer)
      if (work) {breakTime()}
      else {workTime()}
    }
  }, 1000)
}

function breakTime() {
  var time = $('.break .modifiers-time').text()
  $('#clock-text').html(time + ":00")
  work = false
  startTimer()
}

function workTime() {
  var time = $('.session .modifiers-time').text()
  $('#clock-text').html(time + ":00")
  work = true
  startTimer()
}
