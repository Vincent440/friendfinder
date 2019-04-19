/* eslint-disable no-undef */

//NPM DEPENDENCIES
var express = require("express");

//creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//"start" server
app.listen(PORT, function() {
  console.log("App listening on PORT: localhost:" + PORT);
});