'use strict';

/* Module for Entry */

var noteModule = angular.module('note.module', ['myApp']);

/**
 * Module for entry
 */

noteModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/note');
    // Pages routes
    $stateProvider    
	    .state('listNotes',    {
	    	url:'/note',
	    	templateUrl: 'partials/note/note_list.html',
	    	controller: 'NoteCtrl'
	    })	    	
	    .state('recordNote', {
	    	url:'/note/new',
	    	templateUrl: 'partials/note/note_form.html', 
	    	controller: 'NoteCtrl'
	    })	    	
	    .state('editNote', {
	    	url:'/note/:id',
	    	params : {id: null,},
	    	templateUrl: 'partials/note/note_form.html', 
	    	controller: 'NoteCtrl'
	    })
	    .state('viewNote', {
	    	url:'/note/profile/:id',
	    	templateUrl: 'partials/note/note_profile.html',
	    	controller: 'NoteCtrl'
	    })
}]);