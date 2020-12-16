var express = require('express');
var router = express.Router();
var connection = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var image_id = req.query.id;
  if(image_id === undefined){
    return res.status(400).send('You must specify an image to view');
  }
  connection.query('SELECT * FROM images WHERE id = ?' , [image_id], function(error, results){
    if (results.length == 0){
      res.send("No image with this id found")
    }
    else{
        var image = results[0];
        res.render("view_image", {
          session: req.session,
          image : image,
        });
    }




})
});


module.exports = router;
