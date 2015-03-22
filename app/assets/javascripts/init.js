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

  $("#corporate-saying").on("click", function(e){
    e.preventDefault();
    serverUrl = '/corporate'

    var request = $.ajax({
      url: serverUrl,
      type: 'get'
    });

    request.done(function(response){
      $("#saying").empty().append(response.saying);
    });
  });

  $("#hacker-saying").on("click", function(e){
    e.preventDefault();
    serverUrl = '/hacker'

    var request = $.ajax({
      url: serverUrl,
      type: 'get'
    });

    request.done(function(response){
      $("#saying").empty().append(response.saying);
    });
  });
});
