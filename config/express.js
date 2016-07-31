var config = require('./config');
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var compression = require('compression');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');

module.exports = function ()
{
	var app = express();

	app.use( session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	app.use( compression() );

	app.use( bodyParser.urlencoded({
		extended: true
	}));

	app.use( bodyParser.json() );

	app.set( 'views', ['./app/views', './public'] );
	app.set( 'view engine', 'jade' );

	require( '../app/routes/index.server.route' )(app);
	require( '../app/routes/partial.server.route' )(app);

	app.use( sass({
		src: './public/sass',
		dest: './public/css',
		outputStyle: 'compressed',
		prefix: '/css',
		debug: true
	}));

	app.use( express.static( './public' ) );

	return app;
};