angular.module('sale').controller('SaleController', [
	'$scope',
	'$state',
	function ($scope, $state) {
		$("body").attr('data-page', 'sale');

		$("#content .tabs li a").click( function () {
			changeState( $(this).parents('li').index() );
		});

		$scope.$on('$viewContentLoaded', function() {
			if ( $("#content .tabs").attr('data-store-top') == undefined ) {
				$("#content .tabs").attr('data-store-top', $("#content").offset().top);
			};

			if ( $(".view-option").attr('data-store-top') == undefined ) {
				$(".view-option").attr('data-store-top', (parseInt( $("#content .tabs").offset().top ) + parseInt( $("#content .tabs").outerHeight() )) );
			};
		});

		function changeState (i) {
			var index = (i !== undefined) ? i : -1;
			var stage = $state.current.name;
			var old_index = $("#content .tabs ul .active").index();

			$("#content .tabs ul .active").removeClass('active');

			if ( index == -1 ) {
				if ( stage == 'sale.buy' || stage == 'sale' ) {
					index = 0;
				} else if ( stage == 'sale.sell' ) {
					index = 1;
				} else if ( stage == 'sale.bid' ) {
					index = 2;
				} else if ( stage == 'sale.search' ) {
					index = 3;
				} else if ( stage == 'sale.information' ) {
					index = 4;
				}
			}

			$("#content .tabs li").eq(index).addClass('active');
		}

		changeState();
	}
]);