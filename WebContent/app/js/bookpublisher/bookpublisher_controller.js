'use strict';

/**
 * Controller for BookPublisher
 **/
bookPublisherModule.controller('BookPublisherCtrl', ['BookPublisher',  '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(BookPublisher, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	    // edition mode
    $scope.mode = null;
    
	// list of bookPublishers
    $scope.bookPublishers = [];
	// bookPublisher to edit
    $scope.bookPublisher = null;

	// referencies entities
	$scope.items = {};

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
    };
    
    /**
     * Refresh bookPublishers list
     */
    $scope.refreshBookPublisherList = function() {
    	try {
			$scope.bookPublishers = [];
        	BookPublisher.getAll().then(
				function(success) {
        	        $scope.bookPublishers = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh bookPublisher
     */
    $scope.refreshBookPublisher = function(publisherId, bookId) {
    	try {
        	$scope.bookPublisher = null;
	        BookPublisher.get(publisherId, bookId).then(
				function(success) {
        	        $scope.bookPublisher = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the bookPublishers list page
     */
    $scope.goToBookPublisherList = function() {
        $scope.refreshBookPublisherList();
        $location.path('/bookPublisher');
    }
    /**
     * Go to the bookPublisher edit page
     */
    $scope.goToBookPublisher = function(publisherId, bookId) {
        $scope.refreshBookPublisher(publisherId, bookId);
        $location.path('/bookPublisher/'+publisherId+'/'+bookId);
    }

    // Actions

    /**
     * Save bookPublisher
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = BookPublisher.create;
			} else {
				save = BookPublisher.update;
			}
			save($scope.bookPublisher).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.bookPublisher = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete bookPublisher
     */
    $scope.delete = function(publisherId, bookId) {
	    try {
			MessageHandler.cleanMessage();
    	    BookPublisher.delete(publisherId, bookId).then(
				function(success) {
                	$scope.goToBookPublisherList();
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
        $scope.bookPublisher = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.publisherId != null && $routeParams.bookId != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshBookPublisher($routeParams.publisherId, $routeParams.bookId);
    } else {
        // List page
        $scope.refreshBookPublisherList();
    }
    
    
}]);
