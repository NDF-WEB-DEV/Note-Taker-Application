const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const router = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');  //adding path module to connect routes

app.use('/api', apiRoutes);
app.use('/api', htmlRoutes);

// GET route for notes page
router.get('/notes', (req, res) => {
    console.log('path = ', path.join(__dirname, '../public/notes.html'))
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//GET route for index page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;