$(document).ready(function() {

  var offOnStatus = false
  var startStatus = false
  var counter = 1
  var checkIfRight = 0 // human variable, for repeating what simon said
  var i = 0
  var colors = {
    0: 'green',
    1: 'red',
    2: 'yellow',
    3: 'blue'
  }
  var highlightedColors = {
    0: '#00cc00',
    1: '#ff6d6d',
    2: '#ffff89',
    3: '#7272ff'
  }
  var simonMoves = []
  var humanMoves = []

  $('.colors').css('pointer-events', 'none')
  offOnGame()
  startGame()
  humanPlays()

  function startGame() {
    $('#startButton').on('click', function() {
      if (offOnStatus) {
        $('.colors').css('pointer-events', 'none')
        $('#startButton').css('background-color', '#DC0D29')
        startStatus = true
        beepingCounter(function() {
          $('#counter').html('01')
          humanMoves = []
          simonMoves = []
          counter = 1
          simonPlays()
        })
      }
    })
  }

  function offOnGame() {
    $('#offOnButton').on('click', function() {
      if ($(this).find('.drag').hasClass('active')){
        $(this).find('.drag').removeClass('active')
        $('#counter').html('--')
        $('#counter').css('opacity', '0.3')
        offOnStatus = false
        $('#startButton').css('background-color', '#32050C')
        startStatus = false
      } else {
        $(this).find('.drag').addClass('active')
        $('#counter').css('opacity', '1')
        offOnStatus = true
      }
    })
  }

  function simonPlays() {
    var randomNr = Math.round(Math.random()*3)
    var randomColor = colors[randomNr]
    $('#' + randomColor).css('background-color', highlightedColors[randomNr])
    simonMoves.push(randomNr)
    playSound(randomNr+1)
    var highlight  = setTimeout(function() {
      $('#' + randomColor).css('background-color', randomColor)
      $('.colors').css('pointer-events', 'auto')
    }, 800)
  }

  function simonRepeat(callback) {
    var repeat = setInterval(function() {
      $('#'+colors[simonMoves[i]]).css('background-color', highlightedColors[simonMoves[i]])
      playSound(simonMoves[i]+1)
      $('#'+colors[simonMoves[i-1]]).css('background-color', colors[simonMoves[i-1]])
      i += 1
      if (i === simonMoves.length) {
        $('#'+colors[simonMoves[i-1]]).css('background-color', colors[simonMoves[i-1]])
        i = 0
        clearInterval(repeat)
        callback()
      }
    }, 800)
  }

  function humanPlays() {
    $('.colors').on('mouseup', function() {
      // revert to normal background color
      var idColor = $(this).attr('id')
      $(this).css('background-color', idColor)
    })
    $('.colors').on('mousedown', function() {
      // add highlighted background color
      var idColor = $(this).attr('id')
      var key = _.findKey(colors, function(v) {
        return v === idColor;
      });
      $(this).css('background-color', highlightedColors[key])
      // if human clicks right, increment checkIfRight counter
      if (simonMoves[checkIfRight] === parseInt(key)) {
        playSound(parseInt(key)+1)
        checkIfRight += 1
        // if human guessed all moves
        if (checkIfRight === simonMoves.length) {
          $('.colors').css('pointer-events', 'none')
          checkIfRight = 0
          incrementCounter()
          // simon repeats already made moves
          simonRepeat(function() {
            // simon does new move after he finishes repeating
            var wait = setTimeout(function() {
              simonPlays()
            }, 800)
          })
        }
      } else {
        console.log('WRONG')
      }
      /*humanMoves.push(parseInt(key))
      console.log('Human ' + humanMoves)*/
    })
  }

  function beepingCounter(callback) {
    var count = 0
    beeper = setInterval(function() {
      if (count === 6) {
        clearInterval(beeper)
        callback()
      }
      count += 1
      if (count % 2 === 0) {
        $('#counter').css('opacity', '0.3')
      } else {
        $('#counter').css('opacity', '1')
      }
    }, 200)
  }

  function incrementCounter() {
    var newNr = parseInt($('#counter').html())+1
    if (newNr.toString().length === 1){
      $('#counter').html('0'+newNr)
    } else {
      $('#counter').html(newNr)
    }
  }

  function playSound(number) {
    var x = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound'+number+'.mp3')
    x.play()
  }

})
