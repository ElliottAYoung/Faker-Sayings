$(document).ready(function(){
  var serverUrl = '/corporate'

  $("#new-saying").on("click", function(e){
    e.preventDefault();

    var request = $.ajax({
      url: '/corporate',
      type: 'get',
    });

    request.done(function(response){
      console.log(response)
    });
  })
});
