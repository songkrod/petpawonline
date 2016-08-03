angular.module('shop').controller('ShopGiftController', [
	'$scope',
	function ($scope) {
		function getRate() {
			return Math.round(Math.random() * 5);
		}

		$scope.gifts = [
			{
				"image": "01.jpg",
				"name": "burrow monkey and banana",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "02.jpg",
				"name": "rascals 14 latex birds rooster",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "03.jpg",
				"name": "squeakie buddie moose",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "04.jpg",
				"name": "jigglerz jr 21 inch fox",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "05.jpg",
				"name": "squeakie buddie monkey",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "06.jpg",
				"name": "jigglerz jr 15 inch parrot",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "07.jpg",
				"name": "burrow chipmunk n acorn",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "08.jpg",
				"name": "jigglerz jr 21 inch skunk",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "09.jpg",
				"name": "burrow chicken hut",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "10.jpg",
				"name": "dogzilla knobby bone small",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "11.jpg",
				"name": "squeakie buddie owl",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "12.jpg",
				"name": "squeakie buddie walrus",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "13.jpg",
				"name": "rascals 14 latex birds bird",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "14.jpg",
				"name": "jigglerz jr 21 inch chipmunk",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "15.jpg",
				"name": "dogzilla tire chew",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "16.jpg",
				"name": "dogzilla knobby treat ball small",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "17.jpg",
				"name": "kong raspberry zoom groom",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "18.jpg",
				"name": "rascals 14 latex birds duck",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "19.jpg",
				"name": "zanies slide n seek puzzle",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "20.jpg",
				"name": "dogzilla knobby treat ball large",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			},
			{
				"image": "21.jpg",
				"name": "petloft pet toys rope ball",
				"rate": getRate(),
				"point": Math.round(Math.random() * 1000)
			}
		];
	}
]);