'use strict';

/**
 * Factory for BookCategory
 */
bookCategoryModule.factory('BookCategory', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage bookCategory
    var entityURL = restURL + '/bookCategory';
	
	/**
     * Validate bookCategory
     * @param bookCategory bookCategory
     * @throws validation exception
     */
	var validate = function (bookCategory) {
		var errors = [];

		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all bookCategorys as list items
         * @return all bookCategorys as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/bookCategory');
    	},

        /**
         * Get all bookCategorys
         * @return all bookCategorys
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get bookCategory
         * @param bookId bookId
         * @param categoryId categoryId
         * @return bookCategory
         */
    	get: function(bookId, categoryId) {
    	    var url = entityURL + '/' + bookId + '/' + categoryId;
        	return $http.get(url);
    	},

        /**
         * Create a new bookCategory
         * @param bookCategory bookCategory
         * @return bookCategory saved
         */
		create: function(bookCategory) {
			validate(bookCategory)
			var url = entityURL;
			return $http.post(url, bookCategory);
    	},

        /**
         * Update bookCategory
         * @param bookCategory bookCategory
         * @return bookCategory saved
         */
    	update: function(bookCategory) {
			validate(bookCategory)
			var url = entityURL + '/' + bookCategory.bookId + '/' + bookCategory.categoryId;
			return $http.put(url, bookCategory);
    	},

		/**
         * Delete bookCategory
         * @param bookId bookId
         * @param categoryId categoryId
         */
    	delete: function(bookId, categoryId) {
        	var url = entityURL + '/' + bookId + '/' + categoryId;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

