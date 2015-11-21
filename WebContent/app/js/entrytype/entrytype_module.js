'use strict';

/* Module for Entrytype */

var entrytypeModule = angular.module('entrytype.module', ['myApp']);

/**
 * Module for entrytype
 */

entrytypeModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/entrytype');
    // Pages routes
    $stateProvider    
	    .state('listEntryTypes',    {
	    	url:'/entrytype',
	    	templateUrl: 'partials/entrytype/entrytype_list.html',
	    	controller: 'EntrytypeCtrl'
	    })	    	
	    .state('recordEntryType', {
	    	url:'/entrytype/new',
	    	templateUrl: 'partials/entrytype/entrytype_form.html', 
	    	controller: 'EntrytypeCtrl'
	    })	    	
	    .state('editEntryType', {
	    	url:'/entrytype/:id',
	    	templateUrl: 'partials/entrytype/entrytype_form.html', 
	    	controller: 'EntrytypeCtrl'
	    })
	    
}]);