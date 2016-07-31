angular.module('sale').controller('SaleBidController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;
		$scope.items = [
			{
				"id": "D000001",
				"image": "d-1.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000002",
				"image": "d-2.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000003",
				"image": "d-3.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000004",
				"image": "d-4.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000005",
				"image": "d-5.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000006",
				"image": "d-6.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000007",
				"image": "d-7.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000008",
				"image": "d-8.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000009",
				"image": "d-9.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
					"image": "petpaw.jpg",
					"rate": parseInt(Math.round(Math.random() * 5))
				}
			},
			{
				"id": "D000010",
				"image": "d-10.jpg",
				"title": "Bid item : ",
				"price": parseInt(Math.random() * 10000),
				"time": "14:03",
				"date": "24 july 2016",
				"owner": {
					"id": "1",
					"name": "offer",
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