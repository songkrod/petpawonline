angular.module('service').controller('ServiceGroomingController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;

		function getRate() {
			return Math.round(Math.random() * 5);
		}

		$scope.items = [
			{
				"id": "G000001",
				"image": "g/service-1.jpg",
				"title": "Four Dog",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000002",
				"image": "g/service-2.jpg",
				"title": "Furry Friends",
				"date": "All day",
				"time": "8:00 - 21:00",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000003",
				"image": "g/service-3.jpg",
				"title": "Happy grooming",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000004",
				"image": "g/service-4.jpg",
				"title": "K9 Design",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000005",
				"image": "g/service-5.jpg",
				"title": "Littlest",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000006",
				"image": "g/service-6.jpg",
				"title": "Paws Fpar",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000007",
				"image": "g/service-7.jpg",
				"title": "Pawz",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000008",
				"image": "g/service-8.jpg",
				"title": "Pet Groomer",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "G000009",
				"image": "g/service-9.jpg",
				"title": "White Dog",
				"date": "Mon - Sat",
				"time": "7:00 - 21:30",
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