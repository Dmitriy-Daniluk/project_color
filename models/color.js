var mongoose = require('mongoose')
var Schema = mongoose.Schema

var colorSchema = new Schema({
	title: String,
	nick: {
		type: String,
		unique: true,
		required: true
	},
	avatar: String,
	desc: String,
	created:{
		type:Date,
		default:Date.now
	}
})

module.exports.Color = mongoose.model("Color", colorSchema)