'use strict';

/* Module for Entrytype */

var entrytypeModule = angular.module('entrytype.module', ['myApp']);

/**
 * Module for entrytype
 */
entrytypeModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/entrytype',    {templateUrl: 'partials/entrytype/entrytype_list.html', controller: 'EntrytypeCtrl'});
    $routeProvider.when('/entrytype/new', {templateUrl: 'partials/entrytype/entrytype_form.html', controller: 'EntrytypeCtrl'});
    $routeProvider.when('/entrytype/:id', {templateUrl: 'partials/entrytype/entrytype_form.html', controller: 'EntrytypeCtrl'});
}]);
