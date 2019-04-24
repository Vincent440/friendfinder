/* eslint-disable no-console */
/* eslint-disable no-undef */

//NPM DEPENDENCIES
const express = require("express");

//creating an "express" server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//"start" server
app.listen(PORT,() => console.log(`Server listening on: http://localhost:${PORT}`));