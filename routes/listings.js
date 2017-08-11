var express = require('express');
var router = express.Router();
var listingsService = require('../services/listings.service');

/* GET home page. */
router.get('/', function(req, res) {

    listingsService.getListings(function(data) {
        res.render('listings', { properties: data.List });
    });
});

module.exports = router;
