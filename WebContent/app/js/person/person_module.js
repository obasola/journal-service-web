'use strict';

/* Module for Person */

var personModule = angular.module('person.module', ['myApp']);

/**
 * Module for person
 */

personModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/note');
    // Pages routes
    $stateProvider    
	    .state('listUsers',    {
	    	url:'/person',
	    	templateUrl: 'partials/person/person_list.html',
	    	controller: 'PersonCtrl'
	    })	    	
	    .state('createUser', {
	    	url:'/person/new',
	    	templateUrl: 'partials/person/person_form.html', 
	    	controller: 'PersonCtrl'
	    })	    	
	    .state('editUser', {
	    	url:'/person/:id',
	    	templateUrl: 'partials/person/person_form.html', 
	    	controller: 'PersonCtrl'
	    })
}]);