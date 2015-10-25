'use strict';

/* Module for Entry */

var entryModule = angular.module('entry.module', ['myApp']);

/**
 * Module for entry
 */
entryModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/entry',    {templateUrl: 'partials/entry/entry_list.html', controller: 'EntryCtrl'});
    $routeProvider.when('/entry/new', {templateUrl: 'partials/entry/entry_form.html', controller: 'EntryCtrl'});
    $routeProvider.when('/entry/:identry', {templateUrl: 'partials/entry/entry_form.html', controller: 'EntryCtrl'});
}]);
