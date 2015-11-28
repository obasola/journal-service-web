'use strict';

/**
 * Controller for Entry
 **/
noteModule.controller('NoteCtrl', ['Note',  'Entrytype', '$scope', '$state', '$stateParams', '$http', '$location', '$cookies', 'MessageHandler', 'restURL', function(Note, Entrytype, $scope, $state, $stateParams, $http, $location, $cookies, MessageHandler, restURL) {
	 'Entrytype',     // edition mode
    $scope.mode = null;
    
	// list of entrys
    $scope.notes = [];
	// entry to edit
    $scope.note = null;

	// referencies entities
	$scope.items = {};
    // entrytypes
	$scope.items.entrytypes = [];

	$scope.currentNoteId = $stateParams.id;
	
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
			$scope.notes = [];
        	Note.getAll().then(
				function(success) {
        	        $scope.notes = success.data;
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
        	$scope.note = null;
        	Note.get(identry).then(
				function(success) {
        	        $scope.note = success.data;
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
        $location.path('/note');
    }
    /**
     * Go to the entry edit page
     */
    $scope.goToEntry = function(identry) {
        $scope.refreshEntry(identry);
        $location.path('/note/'+identry);
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
        		save = Note.create;
			} else {
				save = Note.update;
			}
			save($scope.note).then(
    	        function(success) {
	                MessageHandler.addSuccess('save ok');
                	$scope.note = success.data;
                	$scope.note = {};
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
			Note.delete(identry).then(
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
        $scope.note = {};
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
