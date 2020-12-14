var express = require('express');
var router = express.Router();
var connection = require('../database');
const { request } = require('../app');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var { email, password } = req.body;

  console.log(email, password);
  //check whether valid email and password 
  connection.query('SELECT * FROM users WHERE email = ? AND password = ?' , [email, password], function(error, results){
      if (results.length = 0){
        res.send("No account exists with this username and password, please create an account")
      }
      else{
          req.session.logged_in = true;
          res.redirect('/');
      }




  })

});

module.exports = router;
