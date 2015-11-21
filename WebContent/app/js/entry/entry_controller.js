'use strict';

/**
 * Controller for Entry
 **/
entryModule.controller('EntryCtrl', ['Entry',  'Entrytype', '$scope', '$state', '$stateParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(Entry, Entrytype, $scope, $state, $stateParams, $http, $location, $cookies, MessageHandler, restURL) {
	 'Entrytype',     // edition mode
    $scope.mode = null;
    
	// list of entrys
    $scope.entrys = [];
	// entry to edit
    $scope.entry = null;

	// referencies entities
	$scope.items = {};
    // entrytypes
	$scope.items.entrytypes = [];

    /**
     * Load all referencies entities
     */
	$scope.loadAllReferencies = function() {
		Entrytype.getAllAsListItems().then(
				function(success) {
        	        $scope.items.entrytypes = success.data;
            	}, 
	            MessageHandler.manageError);
    };
    
    /**
     * Refresh entrys list
     */
    $scope.refreshEntryList = function() {
    	try {
			$scope.entrys = [];
        	Entry.getAll().then(
				function(success) {
        	        $scope.entrys = success.data;
            	}, 
	            MessageHandler.manageError);
    	} catch(ex) {
    		MessageHandler.manageException(ex);
    	}
    }
    /**
     * Refresh entry
     */
    $scope.refreshEntry = function(identry) {
    	try {
        	$scope.entry = null;
	        Entry.get(identry).then(
				function(success) {
        	        $scope.entry = success.data;
            	}, 
	            MessageHandler.manageError);
    	  } catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    }

    /**
     * Go to the entrys list page
     */
    $scope.goToEntryList = function() {
        $scope.refreshEntryList();
        $location.path('/entry');
    }
    /**
     * Go to the entry edit page
     */
    $scope.goToEntry = function(identry) {
        $scope.refreshEntry(identry);
        $location.path('/entry/'+identry);
    }

    // Actions

    /**
     * Save entry
     */
    $scope.save = function() {
    	try {
			MessageHandler.cleanMessage();
			var save;
			if( $scope.mode === 'create' ) {
        		save = Entry.create;
			} else {
				save = Entry.update;
			}
			save($scope.entry).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.entry = success.data;
            	},
        	    MessageHandler.manageError);
    	} catch(ex) {
        	MessageHandler.manageException(ex);
    	}
    };
    /**
     * Delete entry
     */
    $scope.delete = function(identry) {
	    try {
			MessageHandler.cleanMessage();
    	    Entry.delete(identry).then(
				function(success) {
                	$scope.goToEntryList();
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
        $scope.entry = {};
        $scope.mode = 'create';
		$scope.loadAllReferencies();
        $scope.bookorderitem = null;
    } else if( $state.params.id != null ) {
        // Edit page
		$scope.loadAllReferencies();
		$scope.refreshEntry($state.params.id);
    } else {
        // List page
        $scope.refreshEntryList();
    }
    
    
}]);
