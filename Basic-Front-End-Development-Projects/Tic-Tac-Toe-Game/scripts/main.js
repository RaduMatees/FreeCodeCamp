$(document).ready(function() {

  var player1weapon = 'X'
  var player2weapon = '0'
  var player1Turn = true
  var positions = ['#', '#', '#', '#', '#', '#', '#', '#', '#']

  drawSquares()

  function drawSquares() {
    $('.board .squares').on('click', function() {
      var clickedSquare = $(this).children('.X0')
      // if the square is free, do this
      if (clickedSquare.html() === ''){
        // switch between turns
        if (player1Turn){
          clickedSquare.html(player1weapon)
          player1Turn = false
        } else {
          clickedSquare.html(player2weapon)
          player1Turn = true
        }
      }
      var squareId = $(this).attr('id')
      pushMoveToArray(squareId)
    })
  }

  function pushMoveToArray(id) {
    // push the newly created square content(X or 0) to the positions array at the correct index
    var squareContent = $('#' + id).children('.X0').html()
    index = id.substr(1)
    positions[index] = squareContent
    // who's player is the last move, so who wins?
    if (player1Turn) {
      var whoWins = '0'
    } else {
      var whoWins = 'X'
    }
    checkIfGameOver(whoWins)
  }

  function checkIfGameOver(XOr0) {
    // check possible winning strategies
    if (positions[0] === XOr0 && positions[1] === XOr0 && positions[2] === XOr0){
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[3] === XOr0 && positions[4] === XOr0 && positions[5] === XOr0){
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[6] === XOr0 && positions[7] === XOr0 && positions[8] === XOr0) {
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[0] === XOr0 && positions[3] === XOr0 && positions[6] === XOr0) {
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[1] === XOr0 && positions[4] === XOr0 && positions[7] === XOr0) {
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[2] === XOr0 && positions[5] === XOr0 && positions[8] === XOr0) {
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[0] === XOr0 && positions[4] === XOr0 && positions[8] === XOr0) {
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    } else if (positions[2] === XOr0 && positions[4] === XOr0 && positions[6] === XOr0) {
      $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    }
  }

})
