const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const userSchema = Schema({
	profileImg: String,
	aboutMe: String,
	login: {
		type: Schema.Types.ObjectId,
		ref: 'Login'
	}
})














