'use strict';

/**
 * Factory for BookPublisher
 */
bookPublisherModule.factory('BookPublisher', ['$http', 'restURL', function($http, restURL) {

	// REST Service URL to manage bookPublisher
    var entityURL = restURL + '/bookPublisher';
	
	/**
     * Validate bookPublisher
     * @param bookPublisher bookPublisher
     * @throws validation exception
     */
	var validate = function (bookPublisher) {
		var errors = [];
        if( bookPublisher.publisherId == null || bookPublisher.publisherId == '' ) {
			errors.push('bookPublisher.id.not.defined');
		}
        if( bookPublisher.bookId == null || bookPublisher.bookId == '' ) {
			errors.push('bookPublisher.id.not.defined');
		}
		if(errors.length > 0) {
			throw errors;
		}
    };
	
	return {
        /**
         * Get all bookPublishers as list items
         * @return all bookPublishers as list items
         */
    	getAllAsListItems: function() {
        	return $http.get(restURL + '/items/bookPublisher');
    	},

        /**
         * Get all bookPublishers
         * @return all bookPublishers
         */
    	getAll: function() {
        	return $http.get(entityURL);
    	},

        /**
         * Get bookPublisher
         * @param publisherId publisherId
         * @param bookId bookId
         * @return bookPublisher
         */
    	get: function(publisherId, bookId) {
    	    var url = entityURL + '/' + publisherId + '/' + bookId;
        	return $http.get(url);
    	},

        /**
         * Create a new bookPublisher
         * @param bookPublisher bookPublisher
         * @return bookPublisher saved
         */
		create: function(bookPublisher) {
			validate(bookPublisher)
			var url = entityURL;
			return $http.post(url, bookPublisher);
    	},

        /**
         * Update bookPublisher
         * @param bookPublisher bookPublisher
         * @return bookPublisher saved
         */
    	update: function(bookPublisher) {
			validate(bookPublisher)
			var url = entityURL + '/' + bookPublisher.publisherId + '/' + bookPublisher.bookId;
			return $http.put(url, bookPublisher);
    	},

		/**
         * Delete bookPublisher
         * @param publisherId publisherId
         * @param bookId bookId
         */
    	delete: function(publisherId, bookId) {
        	var url = entityURL + '/' + publisherId + '/' + bookId;
        	return $http.delete(url);
    	}
	};
	return $this;
}]);

