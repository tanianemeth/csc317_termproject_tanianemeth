var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




var indexRouter = require('./routes/index');
var createUserRouter = require('./routes/create_user');
var loginRouter = require('./routes/login');

var app = express();
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

app.use('/', indexRouter);
app.use('/create_user', createUserRouter);
app.use('/login', loginRouter);

module.exports = app;
