
// User Interface Logic
$(document).ready(function() {
  $("#input-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#enter-number").val();
    $("ul#number-output").prepend("<li>" + userInput + "</li>");

  })

})
