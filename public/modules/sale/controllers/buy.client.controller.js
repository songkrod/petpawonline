angular.module('sale').controller('SaleBuyController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;
		$scope.items = [
			{
				"id": "B000001",
				"image": "b-1.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000002",
				"image": "b-2.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000003",
				"image": "b-3.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000004",
				"image": "b-4.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000005",
				"image": "b-5.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000006",
				"image": "b-6.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000007",
				"image": "b-7.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000008",
				"image": "b-8.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000009",
				"image": "b-9.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "B000010",
				"image": "b-10.jpg",
				"title": "Buy item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "buyer",
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