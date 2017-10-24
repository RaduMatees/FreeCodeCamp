$(document).ready(function() {

  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  var url = ""

  for (i=0; i<streamers.length; i++) {
    populatePage(i)
  }

  function populatePage(i) {
    url = "https://wind-bow.gomix.me/twitch-api/users/" + streamers[i]

    $.ajax({
      type:"GET",
      url: url,
      async: false,
      dataType: "jsonp",
      success: function(json) {
        $('.my-list').append("<li class='my-list-item'><div class='my-round-avatars'> \
        <img src='" + json.logo + "'></div><span class='my-list-names'>" + json.display_name + " \
        </span></li>")
      },
      error: function(errorMessage){
        alert('Error')
      }
    })
  }

})
