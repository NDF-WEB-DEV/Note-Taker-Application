// This file is the starting point
const express = require('express'); //adding dependency or calling express mod function
// const htmlRoutes = require('./routes/htmlRoutes.js');
// const apiRoutes = require('./routes/apiRoutes.js')
// const allApiRoutes = require("./routes/index");
const path = require('path');  //adding path module to connect routes
const util = require('util');
const fs = require('fs'); //File system library
const publicDirPath = path.join(__dirname, "/public");
const { v4: uuidv4 } = require('uuid'); //Unique ID package
const PORT = process.env.PORT || 4017; // const declares environment for port to run on heroku or port 4017 if on local terminal
// const PORT = 4017;
const app = express(); //Turning on express

app.use(express.static('public'));  // All public content resides in the public folder
app.use(express.urlencoded({ extended: true }));  //function for parsing incoming requests w/URL encoded payloads
app.use(express.json()); // Sets up the express app to handle data parsing

//Unable to connect with this code
// app.use("/", htmlRoutes); // connecting the html routes
// app.use('/api', apiRoutes); // connecting api routes
// app.use('/', htmlRoutes); // connecting html routes

//able to connect without routes
// Gets notes.html
app.get("/notes", function (req, res) {
  res.sendFile(path.join(publicDirPath, "notes.html"));
});

// Gets the JSON file
app.get("/api/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

//Reads JSON file 
app.get("/api/notes/:id", function (req, res) {
  let fileNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(fileNotes[Number(req.params.id)]);
});

//Gets index file
app.get("*", function (req, res) {
  res.sendFile(path.join(publicDirPath, "index.html"));
});
// POST 
app.post("/api/notes", function (req, res) {
  let fileNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let newNote = req.body;  //process info
  let uniqueID = fileNotes.length.toString();  //assings ID to the notes
  newNote.id = uniqueID;  //from line 36
  fileNotes.push(newNote);  //add or insert new note
  fs.writeFileSync("./db/db.json", JSON.stringify(fileNotes)); //write file into json file
  console.log("Note saved to db.json. Content: ", newNote);  // print confimation on console
  res.json(fileNotes); //record the note
});
// listening to the PORT
// app.listen.log(`app listening at http://localhost:${PORT}`);

app.listen(PORT, () => { console.log("The server is up!");});