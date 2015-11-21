'use strict';

/* Module for BookCategory */

var bookCategoryModule = angular.module('bookCategory.module', ['myApp']);

/**
 * Module for bookCategory
 */
bookCategoryModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/book');
    // Pages routes
    $stateProvider
	    .state('listBookCategories',    {
	    	url:'/bookCategory',
	    	templateUrl: 'partials/bookcategory/bookcategory_list.html',
	    	controller: 'BookCategoryCtrl'
	    })
	    	
	    .state('createBookCategory', {
	    	url:'/bookCategory/new',
	    	templateUrl: 'partials/bookcategory/bookcategory_form.html', 
	    	controller: 'BookCategoryCtrl'
	    })
	    	
	    .state('editBookCategory', {
	    	url:'/bookCategory/:bookId/:categoryId',
	    	templateUrl: 'partials/bookcategory/bookcategory_form.html', 
	    	controller: 'BookCategoryCtrl'
	    })
}]);
