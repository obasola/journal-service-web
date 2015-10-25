'use strict';

/* Module for BookPublisher */

var bookPublisherModule = angular.module('bookPublisher.module', ['myApp']);

/**
 * Module for bookPublisher
 */
bookPublisherModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/bookPublisher',    {templateUrl: 'partials/bookpublisher/bookpublisher_list.html', controller: 'BookPublisherCtrl'});
    $routeProvider.when('/bookPublisher/new', {templateUrl: 'partials/bookpublisher/bookpublisher_form.html', controller: 'BookPublisherCtrl'});
    $routeProvider.when('/bookPublisher/:publisherId/:bookId', {templateUrl: 'partials/bookpublisher/bookpublisher_form.html', controller: 'BookPublisherCtrl'});
}]);
