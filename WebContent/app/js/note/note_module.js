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
	    .state('nextNote', {
	    	url: 'note/next/:id',
	    	params : {id: null,},
	    	templateUrl:'partials/note/note_profile.html',
	    	controller: function($http, $stateParams) {
	    		var controller = this;
	    		var newUrl = 'rest/entry/'+ $stateParams.id + 1;
	    		$http({method: 'GET', url: newUrl}).success(function(data) {
	    			controller.note = data;
	    		})
	    		
	    	}
	    })
	    .state('newCategory', {
	    	url:'/entrytype/new',
	    	templateUrl: 'partials/entrytype/entrytype_form.html', 
	    	controller: 'EntrytypeCtrl'
	    })	
}]);