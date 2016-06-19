var app = angular.module('myModule', []).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/', {templateUrl: 'partials/index',   controller: ItemsCtrl}).
		when('/test', {templateUrl: 'partials/test', controller: ItemCtrl, reloadOnSearch: false}).
		otherwise({redirectTo: '/'});
	}]);