

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");


// LOGIN for registered users
router.post("/", async (req,res) => {
	try {
		const foundUser = await User.findOne({username: req.body.username});
		console.log(foundUser, "<-- foundUser");
		if(foundUser) {
			if(bcrypt.compareSync(req.body.password, foundUser.password)) {
				req.session.userId = foundUser._id;
				req.session.username = foundUser.username;
				req.session.logged = true;

				res.redirect("/posts");
			} else {
				req.session.message = {};
				req.session.message.type = "login";
				req.session.message.text = "The username or password is incorrect";
				res.redirect("/");
			} 
		} else {
			req.session.message = {};
			req.session.message.type = "login";
			req.session.message.text = "The username or password is incorrect";
			res.redirect("/");
		} 	
	} catch(err) {
		res.send(err)
	}
});


// REGISTER for users wanting to create an account
router.post("/register", async (req,res) => {
	const password = req.body.password;
	// Encrypting password below
	const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	console.log(hashedPassword);
	req.body.password = hashedPassword;
	try {
		const createdUser = await User.create(req.body);
		console.log(createdUser, "<-- CREATED USER");

		req.session.userId = createdUser._id;
		req.session.username = createdUser.uersname;
		req.session.logged = true;

		res.redirect("/posts");
	} catch(err) {
		if(err.code === 11000) {
			req.session.message = {};
			req.session.message.type = "register"
			req.session.message.text = "That username has been taken, please enter another username.";
			res.redirect("/");
		} else {
			res.send(err);
		}
	}
});


router.get("/", (req,res) => {
	req.session.destroy((err) => {
		console.log(req.session)
		if(err) {
			res.send(err);
		} else {
			res.redirect("/");
		}
	})
});



module.exports = router;




