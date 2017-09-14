// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all students
  app.get("/api/all", function(req, res) {
    db.student.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Add a student
  app.post("/api/new", function(req, res) {
    console.log("student Data:");
    console.log(req.body);
    db.student.create({
      studentId: req.body.studentId,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Level: req.body.Level
    });

  });
};