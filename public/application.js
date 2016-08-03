'use strict'

var mainAppModuleName = 'petpawonline';
var mainAppModule = angular.module(mainAppModuleName, ['ui.router', 'ngMap', 'ngImgCrop', 'core', 'user', 'social', 'shop', 'sale', 'service']);

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
		strictDi: true
	});
});