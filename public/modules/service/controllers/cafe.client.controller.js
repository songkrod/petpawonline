angular.module('service').controller('ServiceCafeController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;

		function getRate() {
			return Math.round(Math.random() * 5);
		}

		$scope.items = [
			{
				"id": "C000001",
				"image": "c/service-1.jpg",
				"title": "Animal Cafe",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000002",
				"image": "c/service-2.jpg",
				"title": "Bark in The Dark",
				"date": "All day",
				"time": "8:00 - 21:00",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000003",
				"image": "c/service-3.jpg",
				"title": "Chat L Heureux",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000004",
				"image": "c/service-4.jpg",
				"title": "Cindy",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000005",
				"image": "c/service-5.jpg",
				"title": "K9 Cafe",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000006",
				"image": "c/service-6.jpg",
				"title": "Lady Emma",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000007",
				"image": "c/service-7.jpg",
				"title": "Moo Fish",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000008",
				"image": "c/service-8.jpg",
				"title": "Neko Noniwa",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000009",
				"image": "c/service-9.jpg",
				"title": "The cat cafe",
				"date": "Mon - Sat",
				"time": "7:00 - 21:30",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "C000010",
				"image": "c/service-10.jpg",
				"title": "White Friends",
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