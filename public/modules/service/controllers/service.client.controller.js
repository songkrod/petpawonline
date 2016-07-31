angular.module('service').controller('ServiceController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$("body").attr('data-page', 'service');

		$scope.$on('$viewContentLoaded', function() {
			if ( $("#content .tabs").attr('data-store-top') == undefined ) {
				$("#content .tabs").attr('data-store-top', $("#content").offset().top);
			};
		});

		function changeState (i) {
			var index = (i !== undefined) ? i : -1;
			var stage = $state.current.name;
		}

		changeState();

		$("#content .tabs li a").click( function () {
			changeState( $(this).parents('li').index() );
		});
	}
]);