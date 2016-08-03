angular.module('service').controller('ServiceShopController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;

		function getRate() {
			return Math.round(Math.random() * 5);
		}

		$scope.items = [
			{
				"id": "P000001",
				"image": "p/service-1.jpg",
				"title": "Angell",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000002",
				"image": "p/service-2.jpg",
				"title": "Atlantis",
				"date": "All day",
				"time": "8:00 - 21:00",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000003",
				"image": "p/service-3.jpg",
				"title": "BichoZen",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000004",
				"image": "p/service-4.jpg",
				"title": "Boby & Nina",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000005",
				"image": "p/service-5.jpg",
				"title": "Friends",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000006",
				"image": "p/service-6.jpg",
				"title": "Hotties",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000007",
				"image": "p/service-7.jpg",
				"title": "Mila",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000008",
				"image": "p/service-8.jpg",
				"title": "PetMania",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000009",
				"image": "p/service-9.jpg",
				"title": "Planet Paw",
				"date": "Mon - Sat",
				"time": "7:00 - 21:30",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "P000010",
				"image": "p/service-10.jpg",
				"title": "Repto Land",
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