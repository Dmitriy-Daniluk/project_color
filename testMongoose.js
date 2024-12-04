const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Color = require('./models/color.js').Color

var color = new Color({
	title: "Синий",
	nick: "blue"
})

color.save();



// var schema = mongoose.Schema({ name: String })

// schema.methods.recolor = function(){
// 	console.log(this.name + " разноцветнлся")
// }

// const Color = mongoose.model('Color', schema);

// const colorize = new Color({ name: 'Цвет' });

// colorize.save().then(() => colorize.recolor());