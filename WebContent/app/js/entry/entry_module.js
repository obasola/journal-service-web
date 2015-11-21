'use strict';

/* Module for Entry */

var entryModule = angular.module('entry.module', ['myApp']);

/**
 * Module for entry
 */

entryModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/entry');
    // Pages routes
    $stateProvider
    
	    .state('listEntries',    {
	    	url:'/entry',
	    	templateUrl: 'partials/entry/entry_list.html',
	    	controller: 'EntryCtrl'
	    })
	    	
	    .state('recordEntry', {
	    	url:'/entry/new',
	    	templateUrl: 'partials/entry/entry_form.html', 
	    	controller: 'EntryCtrl'
	    })
	    	
	    .state('editEntry', {
	    	url:'/entry/:id',
	    	params : {id: null,},
	    	templateUrl: 'partials/entry/entry_form.html', 
	    	controller: 'EntryCtrl'
	    })
	    
}]);