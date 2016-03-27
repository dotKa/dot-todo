process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config'),
mongoose = require('./config/mongoose'),
express = require('./config/express'),
passport = require('./config/passport');
var morgan   = require('morgan');                // log requests to the console (express4)
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var database = config.db;
var db = mongoose(),
app = express(),
passport = passport();

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.listen(process.env.PORT || 3000)
module.exports = app;
console.log('Listening on ' + config.port);