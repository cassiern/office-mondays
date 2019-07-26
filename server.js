const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();



require('./db/db');


const loginController = require('./controllers/login');
const usersController = require('./controllers/users');

const postsController = require('./controllers/posts');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.use('/login', loginController);

app.use('/users', usersController);
app.use('/posts', postsController);


app.listen(3000, () => {
    console.log("the server is listening for requests...")
});
