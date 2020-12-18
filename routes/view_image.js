var express = require('express');
var router = express.Router();
var connection = require('../database');

/* GET home page. */
router.get('/', function (req, res, next) {
  var image_id = req.query.id;
  if (image_id === undefined) {
    return res.status(400).send('You must specify an image to view');
  }
  connection.query('SELECT * FROM images WHERE id = ?', [image_id], function (error, images) {
    if (images.length == 0) {
      return res.send("No image with this id found")
    }

    connection.query('SELECT * FROM comments WHERE image = ?', [image_id], function (error, comments) {
  

      var image = images[0];
      res.render("view_image", {
        session: req.session,
        image: image,
        comments: comments,
      });


    });

  });
});


module.exports = router;
