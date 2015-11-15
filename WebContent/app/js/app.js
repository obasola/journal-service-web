'use strict';

// Add "endsWith" function to the String object
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
   'ngRoute'
  ,'ngResource' 
  ,'ngCookies'
  ,'i18n'
  ,'pascalprecht.translate'
  ,'tmh.dynamicLocale'
  ,'mgcrea.ngStrap.tooltip'
  ,'mgcrea.ngStrap.datepicker'
  ,'myApp.filters'
  ,'myApp.services'
  ,'myApp.directives'
  ,'messageHandler.module'
  ,'book.module'
  ,'bookCategory.module'
  ,'bookPublisher.module'
  ,'category.module'
  ,'note.module'
  ,'entry.module'
  ,'entrytype.module'
  ,'person.module'
  ,'publisher.module'
  ,'angular-growl'
  ,'anguFixedHeaderTable'
]);
myApp.controller('NavControl', ['$scope','$location', function($scope,$location) {

	$scope.go = function(path) {
			$location.path = path;
	}
}]);

myApp.controller('HeaderController',['$rootScope', function($rootScope) {
	this.isAdminUser = function() {
		return false;
	};
}]);
/**
 * Main configuration
 */
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
myApp.config(['growlProvider', function(growlProvider) {
	  growlProvider.globalTimeToLive(4000);
}]);
