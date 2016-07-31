angular.module('shop').controller('ShopDetailController', [
	'$scope',
	'$stateParams',
	function ($scope, $stateParams) {
		$scope.viewMode = 'list';

		$scope.products = [
			{
				"id": "1",
				"name": "Royal Canin Mini Adult",
				"segment": "royal-canin-mini-adult",
				"image": "f-01.jpg",
				"category": "dog",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "1230"
			},
			{
				"image": "f-02.jpg",
				"category": "dog",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "1890"
			},
			{
				"image": "f-03.jpg",
				"category": "dog",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "1890"
			},
			{
				"image": "a-01.jpg",
				"category": "dog",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "139"
			},
			{
				"image": "a-02.jpg",
				"category": "dog",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "129"
			},
			{
				"image": "a-03.jpg",
				"category": "dog",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "329"
			}
		];

		var tmp = null;

		for (var i = 0; i < $scope.products.length && tmp == null; i++) {
			if ( $scope.products[i]["id"] == $stateParams.id ) {
				$scope.product = $scope.products[i];
				tmp = 1;
			}
		}

		console.log($stateParams);
	}
]);