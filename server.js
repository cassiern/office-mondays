const express = require('express');
const app = express();

require('./db.db');

const loginController = require('./controllers/login');
const usersController = require('./controllers/login');
const postController = require('./controllers/login');

app.use('/login', loginController);
app.use('/users', usersController);
app.use('/post', postController);




app.listen(3000, () => {
    console.log("the server is listening for requests...")
});
