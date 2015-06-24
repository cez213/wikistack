var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Page.find(function(err, data){
  	res.render('index', {title: 'Wikistack', docs: data});
  });
  //res.render('index', { title: 'Express', docs });
});

router.get('/wiki/:url', function(req, res, next){
	models.Page.findOne({url_name: req.params.url}, function(err, data){
		res.render('show', {doc: data})
	});
})

module.exports = router;
