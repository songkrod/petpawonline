
module.exports = function (sequelize, DataTypes) {
	return sequelize.define('social_post', {
		caption: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});
}