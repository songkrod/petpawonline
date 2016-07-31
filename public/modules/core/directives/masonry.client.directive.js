angular.module('core').directive('gridLayout', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem) {
			var me = elem;

			$(me).masonry({
				columnWidth: '.grid-item',
				itemSelector: '.grid-item',
				percentPosition: true,

			}).imagesLoaded(function() {
				$(me).masonry('layout');
			});
		}
	}
});