'use strict';

/* Module for BookPublisher */

var bookPublisherModule = angular.module('bookPublisher.module', ['myApp']);

/**
 * Module for bookPublisher
 */


bookPublisherModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/bookPublisher');
    // Pages routes
    $stateProvider
	    .state('listBookPublishers',    {
	    	url:'/bookPublisher',
	    	templateUrl: 'partials/bookpublisher/bookpublisher_list.html',
	    	controller: 'BookPublisherCtrl'
	    })
	    	
	    .state('recordBookPublisher', {
	    	url:'/bookPublisher/new',
	    	templateUrl: 'partials/bookpublisher/bookpublisher_form.html', 
	    	controller: 'BookPublisherCtrl'
	    })
	    	
	    .state('editBookPublisher', {
	    	url:'/bookPublisher/:publisherId/:bookId',
	    	templateUrl: 'partials/bookcategory/bookcategory_form.html', 
	    	controller: 'BookPublisherCtrl'
	    })
}]);