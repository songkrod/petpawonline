angular.module('core').directive('onRepeatDone', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function($scope, element, attributes ) {
			$scope.$emit(attributes["onRepeatDone"] || "repeat_done", element);
		}
	}
});