angular.module('core').directive('gridLayout', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem) {
			var me = elem;

			var g = new Grit({
				"columnWidth":"200", 
				"gap":"5"
			});
		}
	}
});