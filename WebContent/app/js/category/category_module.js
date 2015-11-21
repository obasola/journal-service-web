'use strict';

/* Module for Category */

var categoryModule = angular.module('category.module', ['myApp']);

/**
 * Module for category
 */
categoryModule.config(['$routeProvider', function($routeProvider) {
    // Pages routes
    $routeProvider.when('/category',    {templateUrl: 'partials/category/category_list.html', controller: 'CategoryCtrl'});
    $routeProvider.when('/category/new', {templateUrl: 'partials/category/category_form.html', controller: 'CategoryCtrl'});
    $routeProvider.when('/category/:id', {templateUrl: 'partials/category/category_form.html', controller: 'CategoryCtrl'});
}]);

categoryModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/bookPublisher');
    // Pages routes
    $stateProvider
    
	    .state('listCategory',    {
	    	url:'/category',
	    	templateUrl: 'partials/category/category_list.html',
	    	controller: 'CategoryCtrl'
	    })
	    	
	    .state('createCategory', {
	    	url:'/category/new',
	    	templateUrl: 'partials/category/category_form.html', 
	    	controller: 'CategoryCtrl'
	    })
	    	
	    .state('editCategory', {
	    	url:'/category/:id',
	    	templateUrl: 'partials/category/category_form.html', 
	    	controller: 'CategoryCtrl'
	    })
	    
}]);