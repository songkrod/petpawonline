angular.module('core').directive('stickBar', function () {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem) {
			var me = elem;
			
			function sticky(me) {
				var storeTop = $(me).attr('data-store-top');

				if ( storeTop !== undefined ) {
					if ( parseInt( $(document).scrollTop() ) + parseInt( $("#header").outerHeight() ) > $(me).attr('data-store-top') ) {
						if ( !$(me).hasClass('sticky') ) {
							$(me).addClass('sticky');
						}

						$(me).css({
							'top' : $("#header").outerHeight() + 'px',
							'left' : '0px',
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
				$(me).attr('data-store-top', $("#content").offset().top);
				sticky(me);
			};
		}
	}
});