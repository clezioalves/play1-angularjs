angular.module("appModule").factory('UserFactory',
    ['$resource', function($resource) {
      return $resource(_contextPath + 'users/:id',{ id: '@_id' },{
        update: {
            method: 'PUT' // this method issues a PUT request
        },
        query: {
            url:_contextPath + 'users/list/:page',
            isArray: false
        },
        all: {
            url:_contextPath + 'users/all',
            isArray: true
        }
    });
}]);