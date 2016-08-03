angular.module('core').directive('gritLayout', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem) {
			var me = elem[0];

			var g = new Grit({
				"element": me,
				"gap":"5"
			});

			var pa = findAncestor(me, "list");

			$(pa).on('classChanged', some_callback);

			function some_callback() {
				g.layout();
			}

			function findAncestor (el, cls) {
				while ((el = el.parentElement) && !el.classList.contains(cls));
					return el;
			}
		}
	}
});