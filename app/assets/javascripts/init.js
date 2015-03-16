$(document).ready(function(){
  var serverUrl = '/corporate'

  $("#new-saying").on("click", function(e){
    e.preventDefault();

    var request = $.ajax({
      url: serverUrl,
      type: 'get'
    });

    request.done(function(response){
      $("#saying").empty().append(response.saying);
    });
  });
});
