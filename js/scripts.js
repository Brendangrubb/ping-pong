
//
// var converter = function(numberInput) {

//   alert(numberInput);
// ]
// }





$(document).ready(function() {

  $("#input-form").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#enter-number").val());

    for (index = 1; index <= numberInput; index += 1) {
      result = index;

      if (index % 3 === 0 && index % 5 !== 0) {
        result = "ping";
      } else if (index % 5 === 0 && index % 15 !== 0) {
        result = "pong";
      } else if (index % 15 === 0) {
        result = "pingpong";
      };

      $("ul#number-output").append("<li>" + result + "</li>");

    };







 });


})
