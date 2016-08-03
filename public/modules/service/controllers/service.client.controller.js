angular.module('service').controller('ServiceController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$("body").attr('data-page', 'service');

		$("#content .tabs li a").click( function () {
			changeState( $(this).parents('li').index() );
		});

		$scope.$on('$viewContentLoaded', function() {
			if ( $("#content .tabs").attr('data-store-top') == undefined ) {
				$("#content .tabs").attr('data-store-top', $("#content").offset().top);
			};
		});

		function changeState (i) {
			var index = (i !== undefined) ? i : -1;
			var stage = $state.current.name;
			var old_index = $("#content .tabs ul .active").index();

			$("#content .tabs ul .active").removeClass('active');

			if ( index == -1 ) {
				if ( stage == 'service.shop' || stage == 'service' ) {
					index = 0;
				} else if ( stage == 'service.hotel' ) {
					index = 1;
				} else if ( stage == 'service.grooming' ) {
					index = 2;
				} else if ( stage == 'service.cafe' ) {
					index = 3;
				} else if ( stage == 'service.hospital' ) {
					index = 4;
				}
			}

			$("#content .tabs li").eq(index).addClass('active');
		}

		changeState();
	}
]);