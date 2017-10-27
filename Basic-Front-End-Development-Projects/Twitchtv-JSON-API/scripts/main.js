$(document).ready(function() {

  //executing code

  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  var url = ""

  for (i=0; i<streamers.length; i++) {
    populatePage(i)
  }

  $('#all-btn').on('click', function() {
    ('.my-list-item').toggle()
  })

  // functions

  function populatePage(i) {

    url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamers[i] + "/?callback=?"

    $.ajax({
      type:"GET",
      url: url,
      async: false,
      dataType: "jsonp",
      success: function(json) {
        liveStream(json, i)
      },
      error: function(errorMessage){
        alert('Error')
      }
    })// ajax call end
  } // populatePage end


  function liveStream(json, i) {
    if (json.stream === null) {
      offlineStream(i)
    } else {
      $('.my-list').append("<li class='my-list-item'><div class='my-round-avatars'> \
      <img src='" + json.stream.channel.logo + "'></div><span class='my-list-names'>" + json.stream.channel.display_name + " \
      </span></li>")
      $('.my-list-item:last').wrap("<a href='https://go.twitch.tv/" + json.stream.channel.display_name + "' target=_blank></a>")
      $('.my-list-item:last').append('<i class="fa fa-check my-check" aria-hidden="true"></i>')
    }
  }

  function offlineStream(i) {

    url2 = "https://wind-bow.gomix.me/twitch-api/users/" + streamers[i] + "/?callback=?"

    $.ajax({
      type:"GET",
      url: url2,
      async: false,
      dataType: "jsonp",
      success: function(json2) {
        $('.my-list').append("<li class='my-list-item'><div class='my-round-avatars'> \
        <img src='" + json2.logo + "'></div><span class='my-list-names'>" + json2.display_name + " \
        </span></li>")
        $('.my-list-item:last').wrap("<a href='https://go.twitch.tv/" + json2.display_name + "' target=_blank></a>")
        $('.my-list-item:last').append('<i class="fa fa-times my-times" aria-hidden="true"></i>')
      },
      error: function(errorMessage){
        alert('Error')
      }
    })// ajax call end
  }

})
