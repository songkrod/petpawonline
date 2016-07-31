angular.module('shop').controller('ShopSaleController', [
	'$scope',
	function ($scope) {
		$scope.viewMode = 'grid';

		$scope.changeViewMode = function () {
			var w = 0;
			if ( $scope.viewMode == 'list' ) {
				w = 300;
				$scope.viewMode = 'grid';
				$('#content .list').addClass('grid');
			} else {
				w = $('#content .list ul').width();
				$scope.viewMode = 'list';
				$('#content .list').removeClass('grid');
			}

			$('#content .list ul').masonry('layout');
		}

		$scope.pad = function (pad, str, padLeft) {
			if (typeof str === 'undefined') 
				return pad;

			if (padLeft) {
				return (pad + str).slice(-pad.length);
			} else {
				return (str + pad).substring(0, pad.length);
			}
		}

		$scope.random = function() {
			return 0.5 - Math.random();
		}

		$scope.maxRate = 5;

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
				"price": "1230",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "2",
				"name": "Royal Canin Medium Adult",
				"segment": "royal-canin-medium-adult",
				"image": "f-02.jpg",
				"category": "dog",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "1890",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "3",
				"name": "Royal Canin Maxi Adult",
				"segment": "royal-canin-maxi-adult",
				"image": "f-03.jpg",
				"category": "dog",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "royal canin",
				"price": "1890",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "4",
				"name": "Sukina Petto Waterer 2 lt",
				"segment": "sukina-petto-waterer-2-it",
				"image": "a-01.jpg",
				"category": "dog",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "139",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "5",
				"name": "Superdesign Stainless Steel Bowl",
				"segment": "superdesign-stainless-steel-bowl",
				"image": "a-02.jpg",
				"category": "dog",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "129",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "6",
				"name": "Superdesign Stainless Steel Double Bowl",
				"segment": "superdesign-stainless-steel-double-bowl",
				"image": "a-03.jpg",
				"category": "dog",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "329",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "7",
				"name": "PPP Aromacare Ear Wipes",
				"segment": "ppp-aromacare-ear-wipes",
				"image": "hw-01.jpg",
				"category": "dog",
				"product": "Health and Wellness",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "389",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "8",
				"name": "Dental Fresh for Dogs Advanced Plaque & Tartar",
				"segment": "dental-fresh-for-dogs-advanced-plaque-and-tartar",
				"image": "hw-02.jpg",
				"category": "dog",
				"product": "Health and Wellness",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "335",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "9",
				"name": "Green Pet Grass",
				"segment": "green-pet-grass",
				"image": "hw-03.jpg",
				"category": "dog",
				"product": "Health and Wellness",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "99",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "10",
				"name": "Dog Link Fish Dome Cushion",
				"segment": "dog-link-fish-dome-cushion",
				"image": "h-01.jpg",
				"category": "dog",
				"product": "home",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "449",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "11",
				"name": "Affetto Bonny Chewisty Donut Bed",
				"segment": "affetto-bonny-chewisty-donut-bed",
				"image": "h-02.jpg",
				"category": "dog",
				"product": "home",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "1039",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "12",
				"name": "Petloft Small Cottage Coffee",
				"segment": "petloft-small-cottage-coffee",
				"image": "h-03.jpg",
				"category": "dog",
				"product": "home",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "490",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "13",
				"name": "Bayticol 6% E.C.",
				"segment": "bayticol-6-e-c",
				"image": "m-01.jpg",
				"category": "dog",
				"product": "medicine",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "719",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "14",
				"name": "Controline Spot On Solution For Dogs",
				"segment": "controline-spot-on-solution-for-dogs",
				"image": "m-02.jpg",
				"category": "dog",
				"product": "medicine",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "429",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "15",
				"name": "Ifex Dog Salmon Oil 1000 ml.",
				"segment": "ifex-dog-salmon-oil-1000-ml",
				"image": "m-03.jpg",
				"category": "dog",
				"product": "medicine",
				"size": "All",
				"life": "All",
				"brand": "Ifex",
				"price": "1690",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "16",
				"name": "Friskies Deep Sea Delights Tuna Sardine",
				"segment": "friskies-deep-sea-delights-tuna-sardine",
				"image": "f-01.jpg",
				"category": "cat",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "Friskies",
				"price": "529",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "17",
				"name": "Cat'n Joy Tuna Flavour",
				"segment": "cat-n-joy-tuna-flavour",
				"image": "f-02.jpg",
				"category": "cat",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "Cat'n Joy",
				"price": "443",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "18",
				"name": "Whiskas Gourmet Seafood",
				"segment": "whiskas-gourmet-seafood",
				"image": "f-03.jpg",
				"category": "cat",
				"product": "food",
				"size": "All",
				"life": "All",
				"brand": "Whiskas",
				"price": "259",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "19",
				"name": "KAT-TO Cat Litter Apple",
				"segment": "kat-to-cat-litter-apple",
				"image": "a-01.jpg",
				"category": "cat",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "149",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "20",
				"name": "Odour Lock Cat Litter Ultra Premium",
				"segment": "odour-lock-cat-litter-ultra-premium",
				"image": "a-02.jpg",
				"category": "cat",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "439",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "21",
				"name": "Makar XXL Luxury Cat Litter Box",
				"segment": "makar-xxl-luxury-cat-litter-box",
				"image": "a-03.jpg",
				"category": "cat",
				"product": "accessories",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "829",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "22",
				"name": "Green Pet Maxi Coat Small Breed Cat",
				"segment": "green-pet-maxi-coat-small-breed-cat",
				"image": "hw-01.jpg",
				"category": "cat",
				"product": "Health and Wellness",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "429",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "23",
				"name": "Ohh Pest Control Collar for Cat",
				"segment": "ohh-pest-control-collar-for-cat",
				"image": "hw-02.jpg",
				"category": "cat",
				"product": "Health and Wellness",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "159",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "24",
				"name": "Tropiclean Fresh Breath Drops 2.2oz",
				"segment": "tropiclean-fresh-breath-drops-2-2oz",
				"image": "hw-03.jpg",
				"category": "cat",
				"product": "Health and Wellness",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "319",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "25",
				"name": "Purru Keep Cat Calm Carrier",
				"segment": "purru-keep-cat-calm-carrier",
				"image": "h-01.jpg",
				"category": "cat",
				"product": "home",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "3890",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "26",
				"name": "Petloft Medium Two Tone Condo",
				"segment": "petloft-medium-two-tone-condo",
				"image": "h-02.jpg",
				"category": "cat",
				"product": "home",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "1139",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "27",
				"name": "Petloft Pet Bedding",
				"segment": "petloft-pet-bedding",
				"image": "h-03.jpg",
				"category": "cat",
				"product": "home",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "479",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "28",
				"name": "Hairtone Gel Natural Fish Flavour",
				"segment": "hairtone-gel-natural-fish-flavour",
				"image": "m-01.jpg",
				"category": "cat",
				"product": "medicine",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "159",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "29",
				"name": "Vitakraft Cat Grass",
				"segment": "vitakraft-cat-grass",
				"image": "m-02.jpg",
				"category": "cat",
				"product": "medicine",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "119",
				"rate": Math.round(Math.random() * 5)
			},
			{
				"id": "30",
				"name": "Veterina RBC RX 50 Capsules",
				"segment": "veterina-rbc-rx-50-capsules",
				"image": "m-03.jpg",
				"category": "cat",
				"product": "medicine",
				"size": "All",
				"life": "All",
				"brand": "",
				"price": "269",
				"rate": Math.round(Math.random() * 5)
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