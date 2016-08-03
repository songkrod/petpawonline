angular.module('service').controller('ServiceHotelController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;

		function getRate() {
			return Math.round(Math.random() * 5);
		}

		$scope.items = [
			{
				"id": "S000001",
				"image": "s/service-1.jpg",
				"title": "Adogo",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000002",
				"image": "s/service-2.jpg",
				"title": "Bakin",
				"date": "All day",
				"time": "8:00 - 21:00",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000003",
				"image": "s/service-3.jpg",
				"title": "Canine Cottage",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000004",
				"image": "s/service-4.jpg",
				"title": "Dog House",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000005",
				"image": "s/service-5.jpg",
				"title": "Dog Space",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000006",
				"image": "s/service-6.jpg",
				"title": "Hadley",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000007",
				"image": "s/service-7.jpg",
				"title": "Little Pets",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000008",
				"image": "s/service-8.jpg",
				"title": "Pet Care",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000009",
				"image": "s/service-9.jpg",
				"title": "The Majestic",
				"date": "Mon - Sat",
				"time": "7:00 - 21:30",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "S000010",
				"image": "s/service-10.jpg",
				"title": "Williamsburg",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
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