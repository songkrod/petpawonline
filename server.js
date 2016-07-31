process.env.NODE_ENV = process.env.NODE_ENV || "development";

var db = require('./db');
var express = require('./config/express');
var passport = require('./config/passport');

var app = express();
var passport = passport();

db.sequelize.sync().then(function() {
	console.log('Database connected.');
	app.listen( 4000, function() {
		console.log('Server running at port 4000 on ' + process.env.NODE_ENV);
	});
});