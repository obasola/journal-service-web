'use strict';

/**
 * Factory for Entrytype
 */
entrytypeModule.factory('Entrytype', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage entrytype
    var entityURL = restURL + '/entrytype';
	
	/**
     * Validate entrytype
     * @param entrytype entrytype
     * @throws validation exception
     */
	var validate = function (entrytype) {
		var errors = [];
        if( entrytype.id == null || entrytype.id == '' ) {
			errors.push('entrytype.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all entrytypes as list items
         * @return all entrytypes as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/entrytype');
    	},

        /**
         * Get all entrytypes
         * @return all entrytypes
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get entrytype
         * @param id id
         * @return entrytype
         */
    	get: function(id) {
    	    var url = entityURL + '/' + id;
        	return $http.get(url);
    	},

        /**
         * Create a new entrytype
         * @param entrytype entrytype
         * @return entrytype saved
         */
		create: function(entrytype) {
			validate(entrytype)
			var url = entityURL;
			return $http.post(url, entrytype);
    	},

        /**
         * Update entrytype
         * @param entrytype entrytype
         * @return entrytype saved
         */
    	update: function(entrytype) {
			validate(entrytype)
			var url = entityURL + '/' + entrytype.id;
			return $http.put(url, entrytype);
    	},

		/**
         * Delete entrytype
         * @param id id
         */
    	delete: function(id) {
        	var url = entityURL + '/' + id;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

