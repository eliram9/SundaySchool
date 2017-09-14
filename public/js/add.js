// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // if ($("#firstName").val() || ($("#lastName").val()) ==""){
  //   console.log("pls fill the inputs");
  // }
  // else{

  // Make a newStudent object
  var newStudent = {
    FirstName: $("#firstName").val().trim(),
    LastName: $("#lastName").val().trim(),
    Level: $("#level").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newStudent)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#firstName").val("");
  $("#lastName").val("");
  $("#level").val("");
  // }
});