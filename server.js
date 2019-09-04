// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App and other variables
// =============================================================
var app = express();

//port setting for local testing and server
var PORT = process.env.PORT || 3000;
// var htmlRoutes = require("./routing/htmlRoutes")(app, path);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json());

// serve up static files
app.use(express.static(path.join(__dirname + '/app', 'public')));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

