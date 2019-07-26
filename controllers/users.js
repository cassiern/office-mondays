const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Login = require('../models/login');


router.get('/', async (req, res)=>{
	const users = await User.find({});
	res.send('users/index.ejs')
})













