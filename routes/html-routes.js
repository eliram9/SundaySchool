// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/signin.html"));
  // });
  // add route loads the add.html page, where users can enter new books to the db

  app.get("/add", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/all", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/all.html"));
  });
  //  app.get("/account", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });
  function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
        }
};