var forUser = fucntion(numberInput) {

  for (index = 1; index <= numberInput; index += 1) {
  result = index;

    if (index % 3 === 0 && index % 5 !== 0) {
      result = "ping";
    } else if (index % 5 === 0 && index % 15 !== 0) {
      result = "pong";
    } else if (index % 15 === 0 && index % 150 !== 0) {
      result = "pingpong";
    } else if (index % 150 === 0) {
      result = "pingpongdingdong"
    };

  };
};


$(document).ready(function() {

  $("#input-form").submit(function(event) {
    event.preventDefault();
    $("ul#number-output").empty();

    var numberInput = parseInt($("#enter-number").val());

    $("ul#number-output").append("<li>" + forUser + "</li>");


 });

});
