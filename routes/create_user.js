var express = require('express');
var router = express.Router();
var connection = require('../database');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var { first_name, last_name, email, password } = req.body;

  console.log(first_name, last_name, email, password);
  //check whether email  already exists in database
  connection.query('SELECT * FROM users WHERE email = ?', [email], function(error, results){
    if (results.length > 0) {
      res.send("An account already exists with this email, please login or choose a new email.")
     
      
    }
    else{
      connection.query("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?) ", [first_name, last_name, email, password])
      req.session.logged_in = true;
      res.redirect('/');
    }



  })

});

module.exports = router;
