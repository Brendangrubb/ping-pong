//Business Logic



// User Interface Logic

$(document).ready(function() {

  $("#input-form").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#enter-number").val());

    if (numberInput % 3 === 0 && numberInput % 5 !== 0) {
      alert("ping");
    } else if (numberInput % 5 === 0 && numberInput % 15 !== 0) {
      alert("pong");
    } else if (numberInput % 15 === 0) {
      alert("pingpong");
    }

    // $("ul#number-output").prepend("<li>" + numberInput + "</li>");


  })


})
