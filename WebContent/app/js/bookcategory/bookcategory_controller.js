'use strict';

/**
 * Controller for BookCategory
 **/
bookCategoryModule.controller('BookCategoryCtrl', ['BookCategory',  '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(BookCategory, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	    // edition mode
    $scope.mode = null;
    
	// list of bookCategorys
    $scope.bookCategorys = [];
	// bookCategory to edit
    $scope.bookCategory = null;

	// referencies entities
	$scope.items = {};

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
    };
    
    /**
     * Refresh bookCategorys list
     */
    $scope.refreshBookCategoryList = function() {
    	try {
			$scope.bookCategorys = [];
        	BookCategory.getAll().then(
				function(success) {
        	        $scope.bookCategorys = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh bookCategory
     */
    $scope.refreshBookCategory = function(bookId, categoryId) {
    	try {
        	$scope.bookCategory = null;
	        BookCategory.get(bookId, categoryId).then(
				function(success) {
        	        $scope.bookCategory = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the bookCategorys list page
     */
    $scope.goToBookCategoryList = function() {
        $scope.refreshBookCategoryList();
        $location.path('/bookCategory');
    }
    /**
     * Go to the bookCategory edit page
     */
    $scope.goToBookCategory = function(bookId, categoryId) {
        $scope.refreshBookCategory(bookId, categoryId);
        $location.path('/bookCategory/'+bookId+'/'+categoryId);
    }

    // Actions

    /**
     * Save bookCategory
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = BookCategory.create;
			} else {
				save = BookCategory.update;
			}
			save($scope.bookCategory).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.bookCategory = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete bookCategory
     */
    $scope.delete = function(bookId, categoryId) {
	    try {
			MessageHandler.cleanMessage();
    	    BookCategory.delete(bookId, categoryId).then(
				function(success) {
                	$scope.goToBookCategoryList();
            	}, 
                MessageHandler.manageError);
        } catch(ex) {
            MessageHandler.manageException(ex);
        }
    };
    
    // Main
	MessageHandler.cleanMessage();
    if( $location.path().endsWith('/new') ) {
        // Creation page
        $scope.bookCategory = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.bookId != null && $routeParams.categoryId != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshBookCategory($routeParams.bookId, $routeParams.categoryId);
    } else {
        // List page
        $scope.refreshBookCategoryList();
    }
    
    
}]);
