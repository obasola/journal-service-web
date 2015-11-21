'use strict';

/* Module for Book */

var bookModule = angular.module('book.module', ['myApp']);

/**
 * Module for book
 */

bookModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/book');
 
    $stateProvider
        .state('listBooks', {
            url:'/book',
            templateUrl: 'partials/book/book_list.html',
            controller: 'BookCtrl'
        })
        .state('createBook', {
            url:'/book/new',
            templateUrl: 'partials/book/book_form.html',
            controller: 'BookCtrl'
        })
        .state('editBook', {
            url:'/book/:id',
            params : {id: null,},
            templateUrl: 'partials/book/book_form.html',
            controller: 'BookCtrl'
        })
}]);