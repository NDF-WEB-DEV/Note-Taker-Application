// This file is the starting point
const express = require('express'); //adding dependency or calling express mod function
const path = require('path');  //adding path module to connect routes
const { clog } = require('./middleware/clog'); //npm package for coloring terminal
const api = require('./routes/index.js'); // connecting routes file
const fs = require('fs'); //File system library

// const declares environment for port to run on heroku or port 4017 if on local terminal
const PORT = process.env.PORT || 4017;

const app = express(); //Turning on express

// Middleware for JSON and clog
// Sets up the express app to handle data parsing
app.use(express.json()); 
//function for parsing incoming requests w/URL encoded payloads
app.use(express.urlencoded({ extended: true }));  
app.use(clog);
app.use('/api', api);
// All public content resides in the public folder
app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);  

// GET route for notes page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// listening to the PORT
app.listen.log(`app listening at http://localhost:${PORT}`);