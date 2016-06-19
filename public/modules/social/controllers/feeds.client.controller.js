angular.module('social').controller('SocialFeedsController', [
	'$scope',
	function ($scope) {
		$scope.viewMode = 'list';

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
	}
]);