$(document).ready(function() {

  var userInput = ''
  var url = ''
  userSearch()

  function userSearch() {
    $('#my-input').keypress(function(e) {
      if (e.which == 13) {
        userInput = $('#my-input').val()
        url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userInput + "&format=json&callback=?"
        connectToApi()
      }
    })
  }


  function connectToApi() {
    $('.my-div').animate({marginTop: '1em'}, function() {
      $.ajax({
        type:"GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(json) {
          $('#my-output').html('')
          for (var i=0; i<json[1].length; i++) {
            $('#my-output').append("<li class='my-panel'><a href="+json[3][i]+" target='blank'><h3>"+json[1][i]+"</h3><p>"+json[2][i]+"</p></a></li>")
          }
          $('.my-panel').fadeIn('slow')
        },
        error: function(errorMessage){
          alert('Error')
        }
      })
    })
  }
})
