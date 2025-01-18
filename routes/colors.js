var express = require('express');
var router = express.Router();
var Color = require('../models/color').Color;
var checkAuth = require("../middlewares/checkAuth.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('Новый маршрутизатор, для маршрутов, начинающихся с colors');
});

/* Страница котов */
router.get("/:nick", checkAuth, async function(req, res, next) {
	var colors = await Color.find({nick: req.params.nick});
	console.log(colors)
	if(!colors.length) return next(new Error("Нет такого цвета в базе сайта"))
	var color = colors[0];
	res.render('color', {
		title: color.title,
		picture: color.avatar,
		desc: color.desc
	})
	});
	

module.exports = router;
