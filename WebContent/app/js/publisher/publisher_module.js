'use strict';

/* Module for Publisher */

var publisherModule = angular.module('publisher.module', ['myApp']);

/**
 * Module for publisher
 */

publisherModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/publisher');
    // Pages routes
    $stateProvider    
	    .state('listPublishers',    {
	    	url:'/publisher',
	    	templateUrl: 'partials/publisher/publisher_list.html',
	    	controller: 'PublisherCtrl'
	    })	    	
	    .state('createPublisher', {
	    	url:'/publisher/new',
	    	templateUrl: 'partials/publisher/publisher_form.html', 
	    	controller: 'PublisherCtrl'
	    })	    	
	    .state('editPublisher', {
	    	url:'/publisher/:id',
	    	templateUrl: 'partials/publisher/publisher_form.html', 
	    	controller: 'PublisherCtrl'
	    })
}]);