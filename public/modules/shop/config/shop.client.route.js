angular.module('shop').config([
	'$stateProvider',
	function ($stateProvider) {
		$stateProvider
			.state('shop', {
				url: '/shopping',
				views: {
					'' : {
						controller: 'ShopController',
						templateUrl: 'modules/shop/views/shop.client.view.jade'
					},
					"content": {
						controller: 'ShopFeedsController',
						templateUrl: 'modules/shop/views/feeds.client.view.jade'
					}
				}
			})
			.state('shop.feeds', {
				url: '/products',
				views: {
					"content": {
						controller: 'ShopFeedsController',
						templateUrl: 'modules/shop/views/feeds.client.view.jade'
					}
				}
			}).state('shop.detail', {
				url: '/products/:id/:name',
				views: {
					"content": {
						controller: 'ShopDetailController',
						templateUrl: 'modules/shop/views/detail.client.view.jade'
					}
				}
			}).state('shop.sale', {
				url: '/on-sale',
				views: {
					"content": {
						controller: 'ShopSaleController',
						templateUrl: 'modules/shop/views/sale.client.view.jade'
					}
				}
			}).state('shop.recommend', {
				url: '/recommend',
				views: {
					"content": {
						controller: 'ShopRecommendController',
						templateUrl: 'modules/shop/views/recommend.client.view.jade'
					}
				}
			}).state('shop.gift', {
				url: '/gift',
				views: {
					"content": {
						controller: 'ShopGiftController',
						templateUrl: 'modules/shop/views/gift.client.view.jade'
					}
				}
			});
	}
]);