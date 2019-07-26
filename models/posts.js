const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
	title: {type: String, required:true},
    postBody: {type: String, required:true},
    dateCreated: {type: Date, default: Date.now},
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


const Posts = mongoose.model('Posts', userSchema);
module.exports = Posts;
