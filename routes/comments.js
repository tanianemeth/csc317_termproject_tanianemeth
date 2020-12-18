var express = require('express');
var router = express.Router();
var connection = require('../database');
const { text } = require('express');

/* GET home page. */
router.post('/', function (req, res, next) {
    var comment_text = req.body.text
    var image_id = req.body.image
    if (!req.session.logged_in) {
        return res.status(400).send('You must be logged in to comment');
    }
    var user = req.session.user;
    if (comment_text === undefined) {
        return res.status(400).send('You must enter text to post a comment');
    }
    connection.query("INSERT INTO comments (user, image, text) VALUES (?,?,?)", [user.id, image_id, comment_text], function (error, results) {
        console.log(error, results);
        res.redirect("/view_image?id=" + image_id);
    })
});


module.exports = router;
