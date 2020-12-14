var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// MDB Lightbox Init
// $(function () {
//   $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
//   });

module.exports = router;
