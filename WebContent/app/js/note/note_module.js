'use strict';

/* Module for Entry */

var noteModule = angular.module('note.module', ['myApp']);

/**
 * Module for entry
 */
noteModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/note',    {templateUrl: 'partials/note/note_list.html', controller: 'NoteCtrl'});
    $routeProvider.when('/note/new', {templateUrl: 'partials/note/note_form.html', controller: 'NoteCtrl'});
    $routeProvider.when('/note/:identry', {templateUrl: 'partials/note/note_form.html', controller: 'NoteCtrl'});
}]);
