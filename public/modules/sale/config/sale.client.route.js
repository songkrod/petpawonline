angular.module('sale').config([
	'$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('sale', {
				url: '/sale',
				views: {
					'' : {
						controller: 'SaleController',
						templateUrl: 'modules/sale/views/sale.client.view.jade'
					},
					"content": {
						controller: 'SaleSellController',
						templateUrl: 'modules/sale/views/feeds.client.view.jade'
					}
				}
			})
			.state('sale.sell', {
				url: '/sell',
				views: {
					"content": {
						controller: 'SaleSellController',
						templateUrl: 'modules/sale/views/feeds.client.view.jade'
					}
				}
			})
			.state('sale.buy', {
				url: '/buy',
				views: {
					"content": {
						controller: 'SaleBuyController',
						templateUrl: 'modules/sale/views/feeds.client.view.jade'
					}
				}
			})
			.state('sale.bid', {
				url: '/bid',
				views: {
					"content": {
						controller: 'SaleBidController',
						templateUrl: 'modules/sale/views/feeds.client.view.jade'
					}
				}
			})
			.state('sale.information', {
				url: '/information',
				views: {
					"content": {
						controller: 'SaleInformationController',
						templateUrl: 'modules/sale/views/information.client.view.jade'
					}
				}
			});
	}
]);