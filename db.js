var Sequelize = require( 'sequelize' );
sequelize = new Sequelize( 'petpaw-online', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

var db = {};
db.socialPosts = sequelize.import(__dirname + '/app/models/social.model.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;