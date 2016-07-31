angular.module('user').config([
	'$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('user', {
				url: '/account',
				views: {
					"": {
						controller: 'UserController',
						templateUrl: 'modules/user/views/user.client.view.jade'
					},
					"content": {
						controller: 'UserSettingController',
						templateUrl: 'modules/user/views/setting.client.view.jade'
					}
				}
			})
			.state('user.setting', {
				url: '/setting',
				views: {
					"content": {
						controller: 'UserSettingController',
						templateUrl: 'modules/user/views/setting.client.view.jade'
					}
				}
			})
			.state('user.follower', {
				url: '/follower',
				views: {
					"content": {
						controller: 'UserFollowerController',
						templateUrl: 'modules/user/views/friend.client.view.jade'
					}
				}
			})
			.state('user.following', {
				url: '/following',
				views: {
					"content": {
						controller: 'UserFollowingController',
						templateUrl: 'modules/user/views/friend.client.view.jade'
					}
				}
			})
			.state('user.friend', {
				url: '/friend',
				views: {
					"content": {
						controller: 'UserFriendController',
						templateUrl: 'modules/user/views/friend.client.view.jade'
					}
				}
			});
	}
]);