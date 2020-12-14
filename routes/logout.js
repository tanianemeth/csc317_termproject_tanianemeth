var express = require('express');
var router = express.Router();
var connection = require('../database');
const { request } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {
 req.session.logged_in = false;
 res.redirect('/');

});

module.exports = router;
