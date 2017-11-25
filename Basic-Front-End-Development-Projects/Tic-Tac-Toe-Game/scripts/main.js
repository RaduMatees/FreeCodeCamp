$(document).ready(function() {

  var player1weapon = 'X'
  var player2weapon = '0'
  var player1Turn = true
  var positions = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
  $('.board .squares').css('pointer-events', 'none')
  $('.weapons').hide()

  choosePlayer()

  function choosePlayer() {
    $('.player').on('click', function() {
      if ($(this).children('.X0').html() === '2P') {
        chooseWeapon()
        drawSquares()
      } else {
        chooseWeapon()
        drawSquaresAI()
      }
      $('.howToPlay').hide()
      $('.weapons').show()
    })
  }

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

  function drawSquaresAI() {
    $('.board .squares').on('click', function() {
      var clickedSquare = $(this).children('.X0')
      // if the square is free, do this
      if (clickedSquare.html() === ''){
        clickedSquare.html(player1weapon)
        var squareId = $(this).attr('id')
        pushMoveToArray(squareId)
        // makeEasyMoveAI()
        var playerWeapon = player2weapon
        var bestObject = makeHardMoveAI(positions, playerWeapon)
        var bestIndex = bestObject.index
        $('#s'+bestIndex).children('.X0').html(player2weapon)
        pushMoveToArray('s'+bestIndex)
      }
    })
  }

  // Easy Opponent, just picks up a random free square
  function makeEasyMoveAI() {
    var randomSquare = Math.round(Math.random()*8)
    var squareId = 's'+randomSquare
    if ($('#'+squareId).children('.X0').html() === '') {
      $('#'+squareId).children('.X0').html(player2weapon)
      pushMoveToArray(squareId)
    } else {
      makeEasyMoveAI(player2weapon)
    }
  }

  function makeHardMoveAI(newBoard, player) {
    var availSpots = emptyIndexies(newBoard)
    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if (checkIfGameOverAI(newBoard, player1weapon)){
       return {score:-10}
    }
  	else if (checkIfGameOverAI(newBoard, player2weapon)){
      return {score:10}
  	}
    else if (availSpots.length === 0){
    	return {score:0}
    }

    // an array to collect all the objects
    var moves = []
    // loop through available spots
    for (var i = 0; i < availSpots.length; i++){
      //create an object for each and store the index of that spot
      var move = {}
      move.index = availSpots[i]
      // set the empty spot to the current player's weapon
      newBoard[availSpots[i]] = player

      //collect the score resulted from calling minimax on the opponent of the current player
      if (player === player2weapon){
        var result = makeHardMoveAI(newBoard, player1weapon);
        move.score = result.score
      }
      else {
        var result = makeHardMoveAI(newBoard, player2weapon);
        move.score = result.score
      }
      // reset the spot to empty
      newBoard[availSpots[i]] = '#'
      // push the object to the array
      moves.push(move)
    }

    // if it is the computer's turn loop over the moves and choose the move with the highest score
    var bestMove
    if (player === player2weapon){
      var bestScore = -10000
      for (var i = 0; i < moves.length; i++){
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score
          bestMove = i
        }
      }
    } else {
      // else loop over the moves and choose the move with the lowest score
      var bestScore = 10000;
      for (var i = 0; i < moves.length; i++){
        if (moves[i].score < bestScore){
          bestScore = moves[i].score
          bestMove = i
        }
      }
    }

    // return the chosen move (object) from the moves array
    return moves[bestMove]
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

  function checkIfGameOverAI(board, player){
    if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function emptyIndexies(board) {
    var arr = []
    for (i=0; i<board.length; i++){
      if (board[i] != "0" && board[i] != "X"){
        arr.push(i)
      }
    }
    return arr
  }

})
