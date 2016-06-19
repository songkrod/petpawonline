angular.module('social').filter('test', function() {
	return function (name) {
		return 'Hello, ' + name;
	}
})