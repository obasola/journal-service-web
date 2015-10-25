'use strict';

/* Module for BookCategory */

var bookCategoryModule = angular.module('bookCategory.module', ['myApp']);

/**
 * Module for bookCategory
 */
bookCategoryModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/bookCategory',    {templateUrl: 'partials/bookcategory/bookcategory_list.html', controller: 'BookCategoryCtrl'});
    $routeProvider.when('/bookCategory/new', {templateUrl: 'partials/bookcategory/bookcategory_form.html', controller: 'BookCategoryCtrl'});
    $routeProvider.when('/bookCategory/:bookId/:categoryId', {templateUrl: 'partials/bookcategory/bookcategory_form.html', controller: 'BookCategoryCtrl'});
}]);
