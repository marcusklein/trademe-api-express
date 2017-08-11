var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trade Me Listings! (clicky the button)' });
});

module.exports = router;
