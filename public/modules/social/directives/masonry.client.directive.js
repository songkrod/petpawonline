angular.module('social').directive('gridLayout', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem) {
			var me = elem;
			$(me).masonry({
				itemSelector: '.grid-item',
				percentPosition: true
			}).imagesLoaded(function() {
				$(me)
					.masonry('destroy')
					.masonry({
						itemSelector: '.grid-item',
						percentPosition: true
					});
			});
		}
	}
});