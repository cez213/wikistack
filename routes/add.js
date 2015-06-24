var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add');
});

router.post('/submit', function(req, res, next){
	var models = require('../models/');

	var title = req.body.title;
	var content = req.body.content;
	var url_name = generateUrlName(title);

	var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name });
  	page.save();
  	res.redirect('/');
});

var generateUrlName = function(title){
	if(typeof title !== undefined && title !== ""){
		return title.replace(/\s/ig,'_').replace(/\W/ig,'');
	}else{
		return Math.random().toString(36).substring(2,7);
	}
};

module.exports = router;
