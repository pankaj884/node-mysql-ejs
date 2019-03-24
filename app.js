const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const connection = require('./models/connection');

const {getHomePage} = require('./routes/index');
const {addUserPage, addUser, deleteUser} = require('./routes/user');
const port = 5000;

// configure middleware
app.set('port', process.env.port || port); // port used by express app
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// routes for the app

app.get('/', getHomePage);
app.get('/add', addUserPage);
app.get('/delete/:id', deleteUser);
app.post('/add', addUser);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
