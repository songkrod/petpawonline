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
						controller: 'SocialGridController',
						templateUrl: 'modules/social/views/grid.client.view.jade'
					}
				}
			});
	}
]);