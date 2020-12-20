var express = require('express');
var router = express.Router();
var connection = require('../database');
var default_images = [
  {filename:"1608101838113.jpg"}, {filename: "1608101319270.jpg"}, {filename: "1608255003943.jpg"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query("SELECT * FROM images ORDER BY RAND() LIMIT 3", function(error, results){
    var images = results;
    if (images.length < 3){
      var num_needed = 3 - images.length
      for (var i=0; i < num_needed; i++){
        images.push(default_images[i]);
      }
    }
    console.log(images);

    res.render("index", {
      session: req.session,
      images:images,
    });
  })
  
});


module.exports = router;
