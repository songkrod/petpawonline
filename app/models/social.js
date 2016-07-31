var SocialPosts = sequelize.define('social_post', {
	caption: {
		type: Sequelize.TEXT,
		length: 'long',
		allowNull: true
	}
})