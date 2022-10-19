const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuidv1 = require('uuid/v1');

// GET /api/notes should read the db.json file 
// and return all saved notes as JSON
// Fetch call getting info from json file
router.get('/', (req, res) => {
    const data = fs.readFileSync('/db/db.json')  // fs.readFileSyncPlatform specfic - returns content of path
    .then((data) => res.json(JSON.parse(data))); // return saved notes as JSON format
});

//POST /api/notes
//The req.body property contains key-value pairs of data submitted 
//in the request body. By default, it is undefined and is populated when 
//you use a middleware called body-parsing such as express.urlencoded() or express.json().
router.post('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('db/db.json'));
    const addNote = req.body;  //receive a new note to save on the request body, 
    addNote.id = uuidv1(); //using the unique id package to add id number to note
    data.push(addNote);  //add it to the db.json file, 
    fs.writeFileSync('db/db.json', JSON.stringify(data)); // wrting file to json file and formatiing as JSON
    res.json(data); // return the new note to the client
});

module.exports = router;