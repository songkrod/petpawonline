// var mysql = require( 'mysql' );
var Sequelize = require( 'sequelize' );

sequelize = new Sequelize( 'node', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

var db = {};
// db.todo = sequelize.import(__dirname + '/app/models/todo.js');
db.user = [{"name":"songkrod"}];
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;