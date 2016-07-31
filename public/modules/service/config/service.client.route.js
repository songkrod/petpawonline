angular.module('service').config([
	'$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('service', {
				url: '/service',
				views: {
					'' : {
						controller: 'ServiceController',
						templateUrl: 'modules/service/views/service.client.view.jade'
					}
				}
			});
	}
]);