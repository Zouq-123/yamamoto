var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs')

var indexRouter = require('./routes/index');
var newRouter = require('./routes/new');
var clothesRouter = require('./routes/clothes');
var shoppingRouter = require('./routes/shopping');
var tidingsRouter = require('./routes/tidings');
var registerRouter = require('./routes/register');
var productsRouter = require('./routes/products');
var manRouter = require('./routes/man');
var womanRouter = require('./routes/woman');
var GroundYRouter = require('./routes/GroundY');
var SYTERouter = require('./routes/SYTE');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',ejs.__express);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/clothes', clothesRouter);
app.use('/shopping', shoppingRouter);
app.use('/tidings', tidingsRouter);
app.use('/index', indexRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/man', manRouter);
app.use('/woman', womanRouter);
app.use('/GroundY',GroundYRouter);
app.use('/SYTE', SYTERouter);
app.use('/login', loginRouter);

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
  res.render('error');
});

module.exports = app;
