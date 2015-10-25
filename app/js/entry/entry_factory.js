'use strict';

/**
 * Factory for Entry
 */
entryModule.factory('Entry', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage entry
    var entityURL = restURL + '/entry';
	
	/**
     * Validate entry
     * @param entry entry
     * @throws validation exception
     */
	var validate = function (entry) {
		var errors = [];
        if( entry.identry == null || entry.identry == '' ) {
			errors.push('entry.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all entrys as list items
         * @return all entrys as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/entry');
    	},

        /**
         * Get all entrys
         * @return all entrys
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get entry
         * @param identry identry
         * @return entry
         */
    	get: function(identry) {
    	    var url = entityURL + '/' + identry;
        	return $http.get(url);
    	},

        /**
         * Create a new entry
         * @param entry entry
         * @return entry saved
         */
		create: function(entry) {
			validate(entry)
			var url = entityURL;
			return $http.post(url, entry);
    	},

        /**
         * Update entry
         * @param entry entry
         * @return entry saved
         */
    	update: function(entry) {
			validate(entry)
			var url = entityURL + '/' + entry.identry;
			return $http.put(url, entry);
    	},

		/**
         * Delete entry
         * @param identry identry
         */
    	delete: function(identry) {
        	var url = entityURL + '/' + identry;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

