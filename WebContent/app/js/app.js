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
  ,'ui.router'
  ,'ui.bootstrap'
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
myApp.controller('NavController', ['$scope','$location', function($scope,$location) {

	$scope.go = function(path) {
			$location.path = path;
	}
	$scope.getClass = function (path) {
		  if ($location.path().substr(0, path.length) === path) {
		    return 'active';
		  } else {
		    return '';
		  }
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

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'partials/welcome.html',
            controller: 'NavController'
        })
        .state('book', {
        	url:'/book',
        	templateUrl: 'partials/book/book_list.html',
        	controller: 'BookController'
        })
        .state('profile', {
            url:'/profile',
            templateUrl: 'partials/profile.html',
            controller: 'NavController'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'partials/about.html',
            controller: 'NavController'
        })
}]);

myApp.config(['growlProvider', function(growlProvider) {
	  growlProvider.globalTimeToLive(4000);
}]);
