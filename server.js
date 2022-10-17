// This file is the starting point
const express = require('express'); //adding dependency or calling express mod function
// const htmlRoutes = require('./routes/htmlRoutes.js');
// const apiRoutes = require('./routes/apiRoutes.js')
const allApiRoutes = require("./routes/index");
const path = require('path');  //adding path module to connect routes
const util = require('util');
const fs = require('fs'); //File system library
const { v4: uuidv4 } = require('uuid'); //Unique ID package
const PORT = process.env.PORT || 4017; // const declares environment for port to run on heroku or port 4017 if on local terminal
// const PORT = 4017;
const app = express(); //Turning on express

app.use(express.json()); // Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));  //function for parsing incoming requests w/URL encoded payloads
app.use(express.static('public'));  // All public content resides in the public folder
// app.use("/", htmlRoutes); // connecting the html routes
app.use("/", allApiRoutes); // connecting api routes

// listening to the PORT
// app.listen.log(`app listening at http://localhost:${PORT}`);

app.listen(PORT, () => { console.log("The server is up!");});