//Created by: Alessandro da Silva Santos - Created on: Jun 04, 2021 - 300927354//

//installed the third party packages

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//databese setup

let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to the DB URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console,'Connection Error: '));
mongoDB.once('open', () => {
 console.log('Connected to MongoDB...');
});




let indexRouter = require('../routes/index');
let listRouter = require('../routes/list');
let usersRouter = require('../routes/users');
const { dirname } = require('path');

// create app configuration, setting and use.
let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//As users type URL, slash will router will redirect to the indexRouter
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/list', listRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});

module.exports = app;
