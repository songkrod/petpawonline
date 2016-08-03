angular.module('service').controller('ServiceHospitalController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.maxRate = 5;

		function getRate() {
			return Math.round(Math.random() * 5);
		}

		$scope.items = [
			{
				"id": "H000001",
				"image": "h/service-1.jpg",
				"title": "Animal Space",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000002",
				"image": "h/service-2.jpg",
				"title": "Bantaopui",
				"date": "All day",
				"time": "8:00 - 21:00",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000003",
				"image": "h/service-3.jpg",
				"title": "CFA",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000004",
				"image": "h/service-4.jpg",
				"title": "I Vet",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000005",
				"image": "h/service-5.jpg",
				"title": "Pet friends",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000006",
				"image": "h/service-6.jpg",
				"title": "Premier Pet",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000007",
				"image": "h/service-7.jpg",
				"title": "RTB Center",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000008",
				"image": "h/service-8.jpg",
				"title": "Sabaiji",
				"date": "Mon - Sat",
				"time": "24 hr.",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000009",
				"image": "h/service-9.jpg",
				"title": "Talingchan Animal hospital",
				"date": "Mon - Sat",
				"time": "7:00 - 21:30",
				"province": "bangkok",
				"love": (1+Math.round(Math.random()*1)),
				"rate": getRate()
			},
			{
				"id": "H000010",
				"image": "h/service-10.jpg",
				"title": "The Vet",
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