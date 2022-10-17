// const app = express();
const router = require("express").Router();
const path = require("path");
// const htmlRoutes = require('./routes/htmlRoutes.js');
// const apiRoutes = require('./routes/apiRoutes.js')
// const allApiRoutes = require("./routes");

// GET route for notes page
router.get('/notes', (req, res) => {
    console.log('path = ', path.join(__dirname, '../public/notes.html'))
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//GET route for index page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router; //  export this route
// module.exports = app; //  export this route


// GET route for homepage
// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// ); 