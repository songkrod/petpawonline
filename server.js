process.env.NODE_ENV = process.env.NODE_ENV || "development";

// var db = require('./db');
var express = require('./config/express');
var passport = require('./config/passport');

var app = express();
var passport = passport();

//db.sequelize.sync().then(function() {
//	console.log('Database connected.');
	
	var tPort = process.env.PORT || 5000;
	app.listen( tPort, function() {
		console.log('Server running at port ' + tPort + ' on ' + process.env.NODE_ENV);
	});
//});