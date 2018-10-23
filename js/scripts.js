

// Business Logic
  var palindrome = function(input) {
    var letters = input.split("");
    var lettersReversed = letters.reverse();
    var wordReversed = lettersReversed.join("");
    if (wordReversed === input) {
      return true;
    } else {
      return false;
    };
  };

  
//User Interface Logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
      var input = $("#wordInput").val();
      if (palindrome(input) === true) {
        $("#wordOutput").text("This is a palendrome");
      } else {
        $("#wordOutput").text("This is not a palendrome");
      };
  });
});
