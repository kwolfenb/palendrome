

// Business Logic
  var palindrome = function(input) {
    return input == input.split('').reverse().join('');
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
