angular.module('core').directive('dot', function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
			elem.dotdotdot({
				ellipsis: '.....',
				watch: true,
				wrap: 'letter'
			});
		}
	}
});