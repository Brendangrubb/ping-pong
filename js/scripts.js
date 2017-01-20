//Business Logic

//
// var converter = function(numberInput) {

//   alert(numberInput);
// ]
// }




// User Interface Logic

$(document).ready(function() {

  $("#input-form").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#enter-number").val());

    for (index = 1; index <= numberInput; index += 1) {
      result = index;
      alert(result);
    }

    if (result % 3 === 0 && result % 5 !== 0) {
      alert("ping");
    } else if (result % 5 === 0 && result % 15 !== 0) {
      alert("pong");
    } else if (result % 15 === 0) {
      alert("pingpong");
    }



    // $("ul#number-output").prepend("<li>" + numberInput + "</li>");


  })


})
