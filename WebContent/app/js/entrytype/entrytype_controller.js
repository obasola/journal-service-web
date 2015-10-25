'use strict';

/**
 * Controller for Entrytype
 **/
entrytypeModule.controller('EntrytypeCtrl', ['Entrytype',  '$scope', '$routeParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(Entrytype, $scope, $routeParams, $http, $location, $cookies, MessageHandler, restURL) {
	    // edition mode
    $scope.mode = null;
    
	// list of entrytypes
    $scope.entrytypes = [];
	// entrytype to edit
    $scope.entrytype = null;

	// referencies entities
	$scope.items = {};

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
    };
    
    /**
     * Refresh entrytypes list
     */
    $scope.refreshEntrytypeList = function() {
    	try {
			$scope.entrytypes = [];
        	Entrytype.getAll().then(
				function(success) {
        	        $scope.entrytypes = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh entrytype
     */
    $scope.refreshEntrytype = function(id) {
    	try {
        	$scope.entrytype = null;
	        Entrytype.get(id).then(
				function(success) {
        	        $scope.entrytype = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the entrytypes list page
     */
    $scope.goToEntrytypeList = function() {
        $scope.refreshEntrytypeList();
        $location.path('/entrytype');
    }
    /**
     * Go to the entrytype edit page
     */
    $scope.goToEntrytype = function(id) {
        $scope.refreshEntrytype(id);
        $location.path('/entrytype/'+id);
    }

    // Actions

    /**
     * Save entrytype
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = Entrytype.create;
			} else {
				save = Entrytype.update;
			}
			save($scope.entrytype).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.entrytype = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete entrytype
     */
    $scope.delete = function(id) {
	    try {
			MessageHandler.cleanMessage();
    	    Entrytype.delete(id).then(
				function(success) {
                	$scope.goToEntrytypeList();
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
        $scope.entrytype = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $routeParams.id != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshEntrytype($routeParams.id);
    } else {
        // List page
        $scope.refreshEntrytypeList();
    }
    
    
}]);
