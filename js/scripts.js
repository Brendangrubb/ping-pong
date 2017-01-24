// Business Logic






// User Interface Logic
$(document).ready(function() {

  $("#input-form").submit(function(event) {
    event.preventDefault();
    $("ul#user-output").empty();

    var userInput = parseInt($("#user-enter").val());

    for (index = 1; index <= userInput; index += 1) {
      result = index;

      if (index % 3 === 0 && index % 5 !== 0) {
        result = "ping";
      } else if (index % 5 === 0 && index % 15 !== 0) {
        result = "pong";
      } else if (index % 15 === 0) {
        result = "pingpong";
      };

      $("ul#user-output").append("<li>" + result + "</li>");
    };

 });

});
