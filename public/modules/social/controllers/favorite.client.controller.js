angular.module('social').controller('SocialFavoriteController', [
	'$scope',
	function ($scope) {
		$scope.categories = [
			{
				"name": "mammals",
				"dir": "mammals",
				"type": [
					{
						"name":"Dog - Small size",
						"image":"dog-small-size.jpg",
					},
					{
						"name":"Dog - Medium size",
						"image":"dog-medium-size.jpg",
					},
					{
						"name":"Dog - Large size",
						"image":"dog-large-size.jpg",
					},
					{
						"name":"Cat - Long Hair",
						"image":"cat-long-hair.jpg",
					},
					{
						"name":"Cat - Short Hair",
						"image":"cat-short-hair.jpg",
					},
					{
						"name":"Pig",
						"image":"pig.jpg",
					},
					{
						"name":"Horse",
						"image":"horse.jpg",
					},
					{
						"name":"Cow",
						"image":"cow.jpg",
					},
					{
						"name":"Monkey",
						"image":"monkey.jpg",
					},
					{
						"name":"Sheep",
						"image":"sheep.jpg",
					}
				]
			},
			{
				"name": "rodent",
				"dir": "rodent",
				"type": [
					{
						"name":"Rat",
						"image":"rat.jpg",
					},
					{
						"name":"Hamster",
						"image":"hamster.jpg",
					},
					{
						"name":"Rabbit",
						"image":"rabbit.jpg",
					},
					{
						"name":"Squirrel",
						"image":"squirrel.jpg",
					},
					{
						"name":"Sugar glider",
						"image":"sugar-glider.jpg",
					},
					{
						"name":"Beaver",
						"image":"beaver.jpg",
					},
					{
						"name":"Chipmunk",
						"image":"chipmunk.jpg",
					},
					{
						"name":"Chinchilla",
						"image":"chinchilla.jpg",
					},
					{
						"name":"Ferret",
						"image":"ferret.jpg",
					},
					{
						"name":"Otter",
						"image":"otter.jpg",
					},
					{
						"name":"Hedgehog",
						"image":"hedgehog.jpg",
					},
					{
						"name":"Raccoon",
						"image":"raccoon.jpg",
					}
				]
			},
			{
				"name": "freshwater fish",
				"dir": "freshwater-fish",
				"type": [
					{
						"name":"Arowana",
						"image":"arowana.jpg",
					},
					{
						"name":"Fancy Carp",
						"image":"fancy-carp.jpg",
					},
					{
						"name":"Flower Horn",
						"image":"flower-horn.jpg",
					},
					{
						"name":"Cichlid",
						"image":"cichlid.jpg",
					},
					{
						"name":"Gold fish",
						"image":"gold-fish.jpg",
					},
					{
						"name":"Betta",
						"image":"betta.jpg",
					},
					{
						"name":"Amazon Fish",
						"image":"amazon-fish.jpg",
					},
					{
						"name":"Guppy",
						"image":"guppy.jpg",
					},
					{
						"name":"Angle Fish",
						"image":"angle-fish.jpg",
					},
					{
						"name":"Molly",
						"image":"molly.jpg",
					},
					{
						"name":"Discus",
						"image":"discus.jpg",
					},
					{
						"name":"Pleco",
						"image":"pleco.jpg",
					},
					{
						"name":"Corydorus",
						"image":"corydorus.jpg",
					},
					{
						"name":"Stringray",
						"image":"stringray.jpg",
					},
					{
						"name":"Tiger Fish",
						"image":"tiger-fish.jpg",
					},
					{
						"name":"River Fish",
						"image":"river-fish.jpg",
					},
					{
						"name":"Tetra",
						"image":"tetra.jpg",
					}
				]
			},
			{
				"name": "saltwater fish",
				"dir": "saltwater-fish",
				"type": [
					{
						"name":"Tang Fish",
						"image":"tang-fish.jpg",
					},
					{
						"name":"Clown Fish",
						"image":"clown-fish.jpg",
					},
					{
						"name":"Angle Fish",
						"image":"angle-fish.jpg",
					},
					{
						"name":"Goby",
						"image":"goby.jpg",
					},
					{
						"name":"Butterfly",
						"image":"butterfly.jpg",
					},
					{
						"name":"Mandarin",
						"image":"mandarin.jpg",
					},
					{
						"name":"Damsel",
						"image":"damsel.jpg",
					},
					{
						"name":"Dottyback",
						"image":"dottyback.jpg",
					},
					{
						"name":"Cardinal",
						"image":"cardinal.jpg",
					},
					{
						"name":"Lion Fish",
						"image":"lion-fish.jpg",
					},
					{
						"name":"Wrasse",
						"image":"wrasse.jpg",
					},
					{
						"name":"Parrot Fish",
						"image":"parrotfish.jpg",
					}
				]
			},
			{
				"name": "aquatic",
				"dir": "aquatic-animals",
				"type": [
					{
						"name":"Seahorse",
						"image":"seahorse.jpg",
					},
					{
						"name":"Coral Reef",
						"image":"coral-reef.jpg",
					},
					{
						"name":"Shrimp",
						"image":"shrimp.jpg",
					},
					{
						"name":"Crayfish",
						"image":"crayfish.jpg",
					},
					{
						"name":"Lobster",
						"image":"lobster.jpg",
					},
					{
						"name":"Crab",
						"image":"crab.jpg",
					},
					{
						"name":"Shell",
						"image":"shell.jpg",
					},
					{
						"name":"Octopus",
						"image":"octopus.jpg",
					},
					{
						"name":"Starfish",
						"image":"starfish.jpg",
					},
					{
						"name":"Aquatic Plants",
						"image":"aquatic-plants.jpg",
					}
				]
			},
			{
				"name": "fancy bird",
				"dir": "fancy-bird",
				"type": [
					{
						"name":"Budgerigars",
						"image":"budgerigars.jpg",
					},
					{
						"name":"Cockatail",
						"image":"cockatail.jpg",
					},
					{
						"name":"Cockatoos",
						"image":"cockatoos.jpg",
					},
					{
						"name":"Conure",
						"image":"conure.jpg",
					},
					{
						"name":"Electus",
						"image":"electus.jpg",
					},
					{
						"name":"Finch",
						"image":"finch.jpg",
					},
					{
						"name":"African Gray",
						"image":"african-gray.jpg",
					},
					{
						"name":"Lories & Lolikeet",
						"image":"lorikeet.jpg",
					},
					{
						"name":"Love Bird",
						"image":"love-bird.jpg",
					},
					{
						"name":"Macows",
						"image":"macows.jpg",
					},
					{
						"name":"Ringnecked",
						"image":"ringnecked.jpg",
					},
					{
						"name":"Monk Parakeet",
						"image":"monk-parakeet.jpg",
					},
					{
						"name":"Amazon Parrot",
						"image":"amazon-parrot.jpg",
					},
					{
						"name":"Pigeons",
						"image":"pigeons.jpg",
					},
					{
						"name":"Rosella",
						"image":"rosella.jpg",
					}
				]
			},
			{
				"name": "wild bird",
				"dir": "wild-bird",
				"type": [
					{
						"name":"Grossbeak",
						"image":"grossbeak.jpg",
					},
					{
						"name":"Cardinal",
						"image":"cardinal.jpg",
					},
					{
						"name":"Tanager",
						"image":"tanager.jpg",
					},
					{
						"name":"Woodpecker",
						"image":"woodpecker.jpg",
					},
					{
						"name":"Pycnonotidae",
						"image":"pycnonotidae.jpg",
					},
					{
						"name":"Hornbill",
						"image":"hornbill.jpg",
					},
					{
						"name":"Hummingbird",
						"image":"hummingbird.jpg",
					},
					{
						"name":"Kingfisher",
						"image":"kingfisher.jpg",
					},
					{
						"name":"Toucan",
						"image":"toucan.jpg",
					}
				]
			},
			{
				"name": "raptor bird",
				"dir": "raptor-bird",
				"type": [
					{
						"name":"Owls",
						"image":"owls.jpg",
					},
					{
						"name":"Eagle",
						"image":"eagle.jpg",
					},
					{
						"name":"Falcon",
						"image":"falcon.jpg",
					},
					{
						"name":"Kite",
						"image":"kite.jpg",
					},
					{
						"name":"Hawk",
						"image":"hawk.jpg",
					}
				]
			},
			{
				"name": "poultry",
				"dir": "poultry",
				"type": [
					{
						"name":"Bantams",
						"image":"chicken.jpg",
					},
					{
						"name":"Geese",
						"image":"geese.jpg",
					},
					{
						"name":"Duck",
						"image":"duck.jpg",
					},
					{
						"name":"Swans",
						"image":"swans.jpg",
					},
					{
						"name":"Flamingos",
						"image":"flamingos.jpg",
					},
					{
						"name":"Ostriches",
						"image":"ostriches.jpg",
					},
					{
						"name":"Peacock",
						"image":"peacock.jpg",
					}
				]
			},
			{
				"name": "reptiles",
				"dir": "reptiles",
				"type": [
					{
						"name":"Snake",
						"image":"snake.jpg",
					},
					{
						"name":"Tortoise",
						"image":"tortoise.jpg",
					},
					{
						"name":"Lizard",
						"image":"lizard.jpg",
					},
					{
						"name":"Gecko",
						"image":"gecko.jpg",
					},
					{
						"name":"Bearded Dragon",
						"image":"bearded-dragon.jpg",
					},
					{
						"name":"Camelion",
						"image":"camelion.jpg",
					},
					{
						"name":"Monitor",
						"image":"monitor.jpg",
					},
					{
						"name":"Tegu",
						"image":"tegu.jpg",
					}
				]
			},
			{
				"name": "amphibians",
				"dir": "amphibians",
				"type": [
					{
						"name":"Frog",
						"image":"frog.jpg",
					},
					{
						"name":"Toad",
						"image":"toad.jpg",
					},
					{
						"name":"Salamander",
						"image":"salamander.jpg",
					},
					{
						"name":"Turtle",
						"image":"turtle.jpg",
					},
					{
						"name":"Soft-shell turtle",
						"image":"soft-shell-turtle.jpg",
					},
					{
						"name":"Caiman",
						"image":"caiman.jpg",
					},
					{
						"name":"Snapping",
						"image":"snapping.jpg",
					}
				]
			},
			{
				"name": "arthropoda",
				"dir": "arthropoda",
				"type": [
					{
						"name":"Spider",
						"image":"spider.jpg",
					},
					{
						"name":"Scorpion",
						"image":"scorpion.jpg",
					},
					{
						"name":"Centipede",
						"image":"centipede.jpg",
					},
					{
						"name":"Ladybug",
						"image":"ladybug.jpg",
					},
					{
						"name":"Dragonfly",
						"image":"dragonfly.jpg",
					},
					{
						"name":"Bee",
						"image":"bee.jpg",
					},
					{
						"name":"Ant",
						"image":"ant.jpg",
					},
					{
						"name":"Butterfly",
						"image":"butterfly.jpg",
					},
					{
						"name":"Beetle",
						"image":"beetle.jpg",
					},
					{
						"name":"Grasshopper",
						"image":"grasshopper.jpg",
					}
				]
			}
		];

		$scope.selectAll = function (element) {

			if ( $(element.target).hasClass("selected") ) {
				// for (var i = 0; i < $(element.target).find(".wrap .item").length; i++) {
				// 	if ( $(element.target).find(".wrap .item").eq(i).hasClass("selected") ) {
						$(element.target).parents(".category").find(".wrap .item").removeClass("selected");
				// 	}
				// };

				$(element.target).removeClass("selected");
			} else {
				// for (var i = 0; i < $(element.target).find(".wrap .item").length; i++) {
				// 	if ( !$(element.target).find(".wrap .item").eq(i).hasClass("selected") ) {
						$(element.target).parents(".category").find(".wrap .item").addClass("selected");
				// 	}
				// }

				$(element.target).addClass("selected");
			}
		}

		$scope.selectItem = function (element) {

			if ( $(element.target).parents(".item").hasClass('selected') ) {
				$(element.target).parents(".item").removeClass('selected')
			} else {
				$(element.target).parents(".item").addClass('selected')
			}
		}
	}
]);