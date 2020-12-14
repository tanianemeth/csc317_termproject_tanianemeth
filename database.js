var mysql = require('mysql');
module.exports = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Swim2996',
	database : 'snap_share'
});
