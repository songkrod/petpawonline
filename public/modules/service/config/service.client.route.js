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
					},
					"content": {
						controller: 'ServiceShopController',
						templateUrl: 'modules/service/views/map.client.views.jade'
					}
				}
			}).state('service.shop', {
				url: '/pet-shop',
				views: {
					"content": {
						controller: 'ServiceShopController',
						templateUrl: 'modules/service/views/map.client.views.jade'
					}
				}
			}).state('service.hotel', {
				url: '/hotel',
				views: {
					"content": {
						controller: 'ServiceHotelController',
						templateUrl: 'modules/service/views/map.client.views.jade'
					}
				}
			}).state('service.grooming', {
				url: '/grooming',
				views: {
					"content": {
						controller: 'ServiceGroomingController',
						templateUrl: 'modules/service/views/map.client.views.jade'
					}
				}
			}).state('service.cafe', {
				url: '/cafe',
				views: {
					"content": {
						controller: 'ServiceCafeController',
						templateUrl: 'modules/service/views/map.client.views.jade'
					}
				}
			}).state('service.hospital', {
				url: '/hospital',
				views: {
					"content": {
						controller: 'ServiceHospitalController',
						templateUrl: 'modules/service/views/map.client.views.jade'
					}
				}
			});
	}
]);