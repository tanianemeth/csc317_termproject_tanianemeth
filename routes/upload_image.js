var express = require('express');
var router = express.Router();
var connection = require('../database');


router.post('/', function(req, res, next) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  //check if user is logged in
  if(!req.session.logged_in){
    return res.status(400).send('You must be logged in to upload a photo');
  }
  var user = req.session.user;

  var { title, description} = req.body;

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let image = req.files.image;
  var filename = image.name
  var file_extension = filename.split(".").pop()
  var unq_filename = Date.now() + "." + file_extension 

  // Using the mv() method to place the file
  image.mv('public/uploads/'+unq_filename, function(err) {
    if (err)
      return res.status(500).send(err);
    connection.query("INSERT INTO images (title, description, filename, user, created) VALUES (?, ?, ?, ?, ?) ", [title, description, unq_filename, user.id, new Date()], function(error, results) {
      res.redirect('/view_image?id='+results.insertId);
    }); 

   

  });
});


  
  
  module.exports = router;