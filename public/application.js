'use strict'

var mainAppModuleName = 'petpawonline';
var mainAppModule = angular.module(mainAppModuleName, ['ui.router', 'core', 'user', 'social']);

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
		strictDi: true
	});
});