var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Крансая страница */
router.get('/red', function(req, res, next) {
	res.send("<h1>Красная страница</h1>")
});

/* Синяя страница */
router.get('/blue', function(req, res, next) {
	res.send("<h1>Синяя страница</h1>")
});

/* Зелённая страница */
router.get('/green', function(req, res, next) {
	res.send("<h1>Зелёная страница</h1>")
});



module.exports = router;
