exports.render = function ( req, res )
{
	res.render( 'index', {
		title: 'Petpaw Online!!!',
		profile: '/images/profile.jpg',
		username: req.user ? req.user.username : ''
	});
};