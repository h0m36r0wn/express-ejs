var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
	fullname:{
		type: String,
		index:true
	},
	email:{
		type: String
	},
	position:{
		type: String
	},
	address:{
		type: String
	},
	city:{
		type: String
	},
	username:{
		type: String
	},
	password:{
		type: String
	}
});



var User = module.exports = mongoose.model('User',UserSchema);
