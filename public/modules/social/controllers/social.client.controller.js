angular.module('social').controller('SocialController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$scope.$on('$viewContentLoaded', function() {
			if ( $("#content .tabs").attr('data-store-top') == undefined ) {
				$("#content .tabs").attr('data-store-top', $("#content").offset().top);
			};
		});

		function changeState (i) {
			var index = (i !== undefined) ? i : -1;
			var stage = $state.current.name;

			$("#content .tabs ul .active").removeClass('active');

			if ( index == -1 ) {
				if ( stage == 'social.feeds' || stage == 'social' ) {
					index = 0;
				} else if ( stage == 'social.favorite' ) {
					index = 1;
				}
			}

			$("#content .tabs li").eq(index).addClass('active');
		}

		changeState();

		$("#content .tabs li a").click( function () {
			changeState( $(this).parents('li').index() );
		});

		if ( $state.current.name == 'social' ) {
			$state.go('social.feeds');
		};
	}
]);