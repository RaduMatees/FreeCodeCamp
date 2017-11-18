$(document).ready(function() {

  var player1weapon = 'X'
  var player2weapon = '0'
  var player1Turn = true
  var positions = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
  $('.board .squares').css('pointer-events', 'none')

  chooseWeapon()
  drawSquares()

  function chooseWeapon() {
    $('.weapons .squares').on('click', function() {
      $('.board .squares').css('pointer-events', 'auto')
      player1weapon = $(this).children('.X0').html()
      if (player1weapon === '0') {
        player2weapon = 'X'
      }
      $('.weapons').hide()
    })
  }

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
    if (squareContent === 'X') {
      var whoWins = 'X'
    } else {
      var whoWins = '0'
    }
    checkIfGameOver(whoWins)
  }

  function checkIfGameOver(XOr0) {
    // check possible winning strategies
    if (positions[0] === XOr0 && positions[1] === XOr0 && positions[2] === XOr0){
      celebrateWin(XOr0, 0, 1, 2)
    } else if (positions[3] === XOr0 && positions[4] === XOr0 && positions[5] === XOr0){
      celebrateWin(XOr0, 3, 4, 5)
    } else if (positions[6] === XOr0 && positions[7] === XOr0 && positions[8] === XOr0) {
      celebrateWin(XOr0, 6, 7, 8)
    } else if (positions[0] === XOr0 && positions[3] === XOr0 && positions[6] === XOr0) {
      celebrateWin(XOr0, 0, 3, 6)
    } else if (positions[1] === XOr0 && positions[4] === XOr0 && positions[7] === XOr0) {
      celebrateWin(XOr0, 1, 4, 7)
    } else if (positions[2] === XOr0 && positions[5] === XOr0 && positions[8] === XOr0) {
      celebrateWin(XOr0, 2, 5, 8)
    } else if (positions[0] === XOr0 && positions[4] === XOr0 && positions[8] === XOr0) {
      celebrateWin(XOr0, 0, 4, 8)
    } else if (positions[2] === XOr0 && positions[4] === XOr0 && positions[6] === XOr0) {
      celebrateWin(XOr0, 2, 4, 6)
    } else {
      var count = 0
      for (i=0; i<9; i++){
        if ($('#s'+i).children('.X0').html() !== '') {count += 1}
        if (count === 9) {
          $('#result').html("It's a draw").css('visibility', 'visible')
          waitTillNextTurn()
        }
      }
    }
  }

  function celebrateWin(XOr0, i, j ,k) {
    // color the winning line
    $('#result').html('Player ' + XOr0 + ' wins').css('visibility', 'visible')
    $('#s'+i).children('.X0').addClass('just'+XOr0)
    $('#s'+j).children('.X0').addClass('just'+XOr0)
    $('#s'+k).children('.X0').addClass('just'+XOr0)
    // increasce score board
    var score = parseInt($('#scoreCount'+XOr0).text())
    $('#scoreCount'+XOr0).html(score+1)
    waitTillNextTurn(XOr0)
  }

  function waitTillNextTurn(XOr0) {
    // make board unclickeable
    $('.board .squares').css('pointer-events', 'none')
    setTimeout(function(){
      // reset board
      $('#result').css('visibility', 'hidden')
      $('.board .squares').children('.X0').html('')
      $('.board .squares').children('.X0').removeClass('justX just0')
      $('.board .squares').css('pointer-events', 'auto')
      positions = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
      player1Turn = true
    }, 3000)
  }

})
