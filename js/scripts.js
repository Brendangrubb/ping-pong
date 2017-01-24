// Business Logic

for (index = 1; index <= userInput; index += 1) {
  result = index;

  if (index % 3 === 0 && index % 5 !== 0) {
    result = "ping";
  } else if (index % 5 === 0 && index % 15 !== 0) {
    result = "pong";
  } else if (index % 15 === 0) {
    result = "pingpong";
  };

};


// User Interface Logic
$(document).ready(function() {

  var userInput = parseInt($("#user-enter").val());

  $("#input-form").submit(function(event) {
    event.preventDefault();
    $("ul#user-output").empty();


    $("ul#user-output").append("<li>" + result + "</li>");

 });

});
