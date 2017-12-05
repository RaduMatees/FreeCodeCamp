$(document).ready(function(){

  var inputArr = []
  var operandsArr = ['+', '-', '*', '/']
  var afterEqual = false

  // truncate screen
  function truncateScreen(number) {
    if (number.length > 13) {
      $('#screen').html('Digit Limit Met')
    }
  }

  // CE button clear screen
  $('#my-btn-clear').on('click', function(){
    $('#screen').html('0')
    inputArr = []
  })

  // back button
  $('#my-btn-back').on('click', function(){
    afterEqual = false
    var screenVal = $('#screen').text()
    var maybeOperator = screenVal.substr(screenVal.length-1)
    if (operandsArr.indexOf(maybeOperator) !== -1){
      inputArr.pop()
      inputArr.pop()
    }
    var newScreenVal = screenVal.substr(0, screenVal.length-1)
    $('#screen').html(newScreenVal)
    if ($('#screen').html() === ''){
      inputArr = []
    }
  })

  // push number to screen
  $('.digits').on('click', function(){
    if (afterEqual === true) {$('#screen').html('')}
    afterEqual = false
    if ($('#screen').text() === '0' && $(this).children('.my-btn-text').html() !== '.'){
      $('#screen').html('')
    }
    var number = $(this).text()
    $('#screen').append(number)
    var allScreen = $('#screen').text()
    truncateScreen(allScreen)
  })

  // find last value
  function lastValue(){
    var screenValueArr = $('#screen').text().split('')
    var lastScreenValue = ''
    for (i=screenValueArr.length-1; i>=0; i--){
      if (i === 0){
        lastScreenValue = screenValueArr.join('')
      } else if (operandsArr.indexOf(screenValueArr[i]) !== -1){
        lastScreenValue = screenValueArr.slice(i+1).join('')
        break
      }
    }
    inputArr.push(lastScreenValue)
  }

  // push number to array when user uses operrand
  $('.operands').on('click', function(){
    lastValue()
    var operand = $(this).find('.my-btn-text').text()
    $('#screen').append(operand)
    inputArr.push(operand)
  })


  // evaluate operation if user presses =
  $('#equal').on('click', function(){
    lastValue()
    $('#screen').html('')
    var strOperation = inputArr.join('')
    var result = eval(strOperation)
    result = parseFloat((result).toFixed(2))
    $('#screen').html(result)
    afterEqual = true
    inputArr = []
  })

})
