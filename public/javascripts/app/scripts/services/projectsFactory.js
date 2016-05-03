angular.module("appModule").factory('ProjectFactory',
    ['$resource', function($resource) {
      return $resource(_contextPath + 'projects/:id',{ id: '@_id' },{
        update: {
            method: 'PUT' // this method issues a PUT request
        },
        query: {
            url:_contextPath + 'projects/list/:page',
            isArray: false
        }
    });
}]);