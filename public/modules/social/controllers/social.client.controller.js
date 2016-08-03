angular.module('social').controller('SocialController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$("body").attr('data-page', 'social');

		$scope.image = '/images/profile.jpg';

		$scope.$on('$viewContentLoaded', function() {
			if ( $("#content .tabs").attr('data-store-top') == undefined ) {
				$("#content .tabs").attr('data-store-top', $("#content").offset().top);
			};

			if ( $(".view-option").attr('data-store-top') == undefined ) {
				$(".view-option").attr('data-store-top', (parseInt( $("#content .tabs").offset().top ) + parseInt( $("#content .tabs").outerHeight() )) );
			};
		});

		function changeState (i) {
			var index = (i !== undefined) ? i : -1;
			var stage = $state.current.name;
			var old_index = $("#content .tabs ul .active").index();

			$("#content .tabs ul .active").removeClass('active');

			// if ( index == -1 ) {
			// 	if ( stage == 'social.feeds' || stage == 'social' ) {
			// 		index = 1;
			// 	} else if ( stage == 'social.favorite' ) {
			// 		index = 0;
			// 	} else if ( stage == 'social.me' ) {
			// 		index = 2;
			// 	} else if ( stage == 'social.activity' ) {
			// 		index = old_index;
			// 	} else if ( stage == 'social.message' ) {
			// 		index = 4;
			// 	}
			// }

			if ( index == -1 ) {
				if ( stage == 'social.favorite' || stage == 'social' ) {
					index = 0;
				} else if ( stage == 'social.feeds' ) {
					index = 1;
				} else if ( stage == 'social.me' ) {
					index = 2;
				} else if ( stage == 'social.activity' ) {
					index = old_index;
				} else if ( stage == 'social.message' ) {
					index = 4;
				}
			}

			$("#content .tabs li").eq(index).addClass('active');
		}

		function hideActivity() {
			if ( $("#activity").is(":visible") ) {
				$("#activity").hide();
			};
		}

		changeState();

		$("#content .tabs li a").click( function () {
			var index =  $(this).parents('li').index();

			if ( index != 3 ) {
				changeState(index);
				hideActivity();
			};
		});

		if ( $state.current.name == 'social' ) {
			$state.go('social.feeds');
		};

		$scope.toggleActivity = function () {
			if ( $("#activity").is(":visible") ) {
				$("#activity").hide();
			} else {
				$("#activity").show();
			}
		}
	}
]);