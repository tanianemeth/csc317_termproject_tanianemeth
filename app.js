var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');




var indexRouter = require('./routes/index');
var createUserRouter = require('./routes/create_user');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var viewImageRouter = require('./routes/view_image');
var uploadImageRouter = require('./routes/upload_image');
var searchRouter = require('./routes/search');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {index: false}));
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/create_user', createUserRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/view_image', viewImageRouter);
app.use('/upload_image', uploadImageRouter);
app.use('/search', searchRouter);

module.exports = app;
