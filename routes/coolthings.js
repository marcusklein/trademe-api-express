var express = require('express');
var router = express.Router();
var coolThingsService = require('../services/coolthings.service');

/* GET home page. */
router.get('/', function(req, res, next) {

    coolThingsService.getThings(function(data) {
        res.render('coolthings', { properties: data.List }); 
    });
});

module.exports = router;
