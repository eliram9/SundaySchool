
// Make a get request to our api route that will return every student
$.get("/api/students/all", function(data) {
    console.log(data)
  // For each student that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold student data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "student-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our student data to the well we just placed on the page
    $("#student-well-" + i).append("<h2>" + (i + 1) + ". Student " + data[i].studentId + "</h2>");
    $("#student-well-" + i).append("<h3>First Name: " + data[i].FirstName + "</h4>");
    $("#student-well-" + i).append("<h3>Last Name: " + data[i].LastName + "</h4>");
    $("#student-well-" + i).append("<h3>Level: " + data[i].Level + "</h4>");
  }
});