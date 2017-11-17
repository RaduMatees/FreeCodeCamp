$(document).ready(function() {

  var player1weapon = 'X'
  var player2weapon = '0'
  var player1Turn = true
  var positions = ['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8']

  drawSquares()

  function drawSquares() {
    $('.board .squares').on('click', function() {
      var clickedSquare = $(this).children('.X0')
      // if the square is free, do this
      if (clickedSquare.html() === ''){
        alternatePlayers(clickedSquare)
      }
      var squareId = $(this).attr('id')
      checkIfGameOver(squareId)
    })
  }

  function alternatePlayers(square) {
    // switch between turns
    if (player1Turn){
      square.html(player1weapon)
      player1Turn = false
    } else {
      square.html(player2weapon)
      player1Turn = true
    }
  }

  function checkIfGameOver(id) {
    console.log(id)
  }

})
