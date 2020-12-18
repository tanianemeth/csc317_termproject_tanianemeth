var express = require('express');
var router = express.Router();
var connection = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var keyword = req.query.keyword
  if(keyword === undefined){
    return res.status(400).send('You must specify a keyword to search');
  }
  keyword = keyword.toLowerCase();
  keyword = "%" + keyword + "%"
  connection.query("SELECT * FROM images WHERE LOWER(title) LIKE ? OR LOWER(description) LIKE ?"  , [keyword, keyword], function(error, results){
    console.log(error, results
        );
        res.render("search", {
          session: req.session,
          images : results,
        });
  




})
});


module.exports = router;
