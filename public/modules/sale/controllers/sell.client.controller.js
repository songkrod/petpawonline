angular.module('sale').controller('SaleSellController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;
		$scope.items = [
			{
				"id": "S000001",
				"image": "s-1.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000002",
				"image": "s-2.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000003",
				"image": "s-3.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000004",
				"image": "s-4.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000005",
				"image": "s-5.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000006",
				"image": "s-6.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000007",
				"image": "s-7.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000008",
				"image": "s-8.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000009",
				"image": "s-9.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "S000010",
				"image": "s-10.jpg",
				"title": "Sell item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "seller",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			}
		];
		
		$scope.getNumber = function(num) {
			var arr = new Array();

			for (var i = 0; i < num; i++) {
				arr.push(i);
			}

			return arr;
		}
	}
]);