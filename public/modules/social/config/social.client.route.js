angular.module('social').config([
	'$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('social', {
				url: '/',
				views: {
					'' : {
						controller: 'SocialController',
						templateUrl: 'modules/social/views/social.client.view.jade'
					},
					"content": {
						controller: 'SocialFeedsController',
						templateUrl: 'modules/social/views/feeds.client.view.jade'
					}
				}
			})
			.state('social.feeds', {
				url: 'feeds',
				views: {
					"content": {
						controller: 'SocialFeedsController',
						templateUrl: 'modules/social/views/feeds.client.view.jade'
					}
				}
			})
			.state('social.favorite', {
				url: 'favorite',
				views: {
					"content": {
						controller: 'SocialFavoriteController',
						templateUrl: 'modules/social/views/favorite.client.view.jade'
					}
				}
			})
			.state('social.me', {
				url: 'me',
				views: {
					"content": {
						controller: 'SocialMeController',
						templateUrl: 'modules/social/views/me.client.view.jade'
					}
				}
			});
	}
]);