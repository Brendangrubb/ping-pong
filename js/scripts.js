// Business Logic

var userEnter;
var result;
var userOutput = [];

var processUserEnter = function(userEnter) {
  userOutput = [];
  parseInt(userEnter);
  for (i = 1; i <= userEnter; i += 1) {
    result = i;
    if (i % 3 === 0 && i % 5 !== 0) {
      result = "ping";
    } else if (i % 5 === 0 && i % 15 !== 0) {
      result = "pong";
    } else if (i % 15 === 0) {
      result = "pingpong";
    };
    userOutput.push(result);

  };

};


// User Interface Logic

$(document).ready(function() {

  $("#input-form form").submit(function() {
    event.preventDefault();
    $("#user-output").empty();
    $("#hide-bullet").show();


    var userEnter = $("#user-enter").val();
    var output = processUserEnter(userEnter);

    $("#user-output").append(userOutput.join("</li><li>"));
  })

});




// var userEnter = $("#user-enter").val();








































// Unseparated Business & UI Logic

// $(document).ready(function() {
//
//   $("#input-form").submit(function(event) {
//     event.preventDefault();
//     $("ul#user-output").empty();
//
//     var userInput = parseInt($("#user-enter").val());
//
//     for (index = 1; index <= userInput; index += 1) {
//       result = index;
//
//       if (index % 3 === 0 && index % 5 !== 0) {
//         result = "ping";
//       } else if (index % 5 === 0 && index % 15 !== 0) {
//         result = "pong";
//       } else if (index % 15 === 0) {
//         result = "pingpong";
//       };
//
//       $("ul#user-output").append("<li>" + result + "</li>");
//     };
//
//  });
//
// });
