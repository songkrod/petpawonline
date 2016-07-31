angular.module('core').directive('stickBar', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem) {
			var me = elem;
			var options = JSON.parse($(me).attr('data-stick-to'));
			var gaps = ( options.gaps ? parseInt( options.gaps ) : 0 );
			var posTop = parseInt( $(options.item).outerHeight() ) + gaps;
			
			function sticky(me) {
				var storeTop = $(me).attr('data-store-top');
				if ( storeTop !== undefined ) {
					if ( parseInt( $(document).scrollTop() ) + posTop > storeTop ) {
						if ( !$(me).hasClass('sticky') ) {
							$(me).addClass('sticky');
						}

						$(me).css({
							'top' : posTop + 'px',
							'position' : 'fixed'
						});
					}
					else {
						if ( $(me).hasClass('sticky') ) {
							$(me).removeClass('sticky').attr('style', '');
						}
					}
				}
			}

			sticky(me);

			$(window).on('scroll', function(){
				sticky(me);
			});

			window.onresize = function(event) {
				$(me).attr('data-store-top', $(options.item).offset().top + $(options.item).outerHeight() );
				sticky(me);
			};
		}
	}
});