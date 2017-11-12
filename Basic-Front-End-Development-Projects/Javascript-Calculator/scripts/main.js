$(document).ready(function(){

  var inputArr = []
  var operandsArr = ['+', '-', '*', '/']

  // CE button clear screen
  $('#my-btn-clear').on('click', function(){
    $('#screen').html('')
    inputArr = []
  })

  // push number to screen
  $('.digits').on('click', function(){
    var number = $(this).text()
    $('#screen').append(number)
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
    inputArr = []
  })

})
