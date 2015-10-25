var entryModule = angular.module('entry.module');


entryModule.service('',['$rootScope','Entrytype', function($rootScope, Entrytype) {
	this.getEntryTyle = function($rootScope) {
		Entrytype.get($rootScope.entrytypeId).success(function(data) {
			
		})
		.error(function(data){
			
		});
	};
}]);