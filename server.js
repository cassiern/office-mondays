const express = require('express');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express();

//require the database
require('./db/db');

//require controllers
const loginController = require('./controllers/login');
const usersController = require('./controllers/login');
const postController = require('./controllers/login');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//use the controllers
app.use('/login', loginController);
app.use('/users', usersController);
app.use('/post', postController);

//still need to link a css file to the 


//LocalHost
app.listen(3000, () => {
    console.log("the server is listening for requests...")
});
