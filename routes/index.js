var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/jaguar',function(req,res) {
	res.render('jaguar',{ title: 'Jaguar' });
});

router.get('/beeEater',function(req,res) {
	res.render('beeEater',{ title: 'beeEater' });
});

router.get('/heteroptera',function(req,res) {
	res.render('heteroptera',{ title: 'Heteroptera' });
});

module.exports = router;
