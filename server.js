const express = ('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');

const userController = require('./controllers/users');




app.user(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlendcoded({extended: false}));
app.use('/users', userController);

app.use('/', (req, res)=>{
	res.render('')
})








