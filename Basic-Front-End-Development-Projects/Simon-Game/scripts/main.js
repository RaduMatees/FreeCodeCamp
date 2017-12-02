$(document).ready(function() {

  var offOnStatus = false
  var startStatus = false
  var strict = false
  var counter = 1
  var checkIfRight = 0 // human variable, for repeating what simon said
  var repeat // simon repeating interval
  var beeper
  var pause // if user gets wrong, pause before simon playing again
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

  $('.colors').css('pointer-events', 'none')
  offOnGame()
  startGame()
  humanPlays()

  $('#strictButton').on('click', function() {
    if (offOnStatus){
      if (!strict){
        $(this).css('background-color', '#DC0D29')
        strict = true
      } else {
        $(this).css('background-color', '#32050C')
        strict = false
      }
    }
  })

  function startGame() {
    $('#startButton').on('click', function() {
      if (offOnStatus) {
        $('.colors').css('pointer-events', 'none')
        $(this).css('background-color', '#DC0D29')
        startStatus = true
        // return to default colors
        $('#green').css('background-color', 'green')
        $('#red').css('background-color', 'red')
        $('#yellow').css('background-color', 'yellow')
        $('#blue').css('background-color', 'blue')
        // stop if simon is repeating an interval
        clearInterval(repeat)
        clearInterval(beeper)
        clearInterval(pause)
        beepingCounter(function() {
          $('#counter').html('01')
          simonMoves = []
          counter = 1
          checkIfRight = 0
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
        $('#strictButton').css('background-color', '#32050C')
        startStatus = false
        strict = false
        simonMoves = []
        counter = 1
        checkIfRight = 0
        clearInterval(repeat)
        clearInterval(beeper)
        clearInterval(pause)
        $('.colors').css('pointer-events', 'none')
        // return to default colors
        $('#green').css('background-color', 'green')
        $('#red').css('background-color', 'red')
        $('#yellow').css('background-color', 'yellow')
        $('#blue').css('background-color', 'blue')
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
    var i = 0
    repeat = setInterval(function() {
      $('#'+colors[simonMoves[i]]).css('background-color', highlightedColors[simonMoves[i]])
      playSound(simonMoves[i]+1)
      if (simonMoves[i] !== simonMoves[i-1]) {
        $('#'+colors[simonMoves[i-1]]).css('background-color', colors[simonMoves[i-1]])
      }
      i += 1
      if (i === simonMoves.length) {
        clearInterval(repeat)
        // waits a bit before turning of last played position
        var pause = setTimeout(function() {
          $('#'+colors[simonMoves[i-1]]).css('background-color', colors[simonMoves[i-1]])
        }, 800)
        callback()
      }
    }, 800)
  }

  function humanPlays() {
    $('.colors').on('mouseup', function() {
      // revert to normal background color
      var idColor = $(this).attr('id')
      $(this).css('background-color', idColor)
      var key = _.findKey(colors, function(v) {
        return v === idColor;
      });
      // if human clicks right
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
        playSoundError()
        if (strict){
          beepingCounter(function() {
            $('#counter').html('01')
            checkIfRight = 0
            simonMoves = []
            counter = 1
            simonPlays()
          })
        } else {
          beepingCounter(function() {
            simonRepeat() // ??????
          })
        }
      }
    })
    $('.colors').on('mousedown', function() {
      // add highlighted background color
      var idColor = $(this).attr('id')
      var key = _.findKey(colors, function(v) {
        return v === idColor;
      });
      $(this).css('background-color', highlightedColors[key])
    })
  }

  function beepingCounter(callback) {
    $('#counter').html('!!')
    var count = 0
    beeper = setInterval(function() {
      if (count === 6) {
        clearInterval(beeper)
        // make a short pause before starting again
        pause = setTimeout(function() {
          callback()
        }, 1600)
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

  function playSoundError() {
    var x = new Audio('./sounds/hum.mp3')
    x.volume = 0.03
    x.play()
  }

})
