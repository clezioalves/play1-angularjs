angular.module("appModule").factory('UserService', function($resource) {
  return $resource('/users/:id',{ id: '@_id' },{
    update: {
        method: 'PUT' // this method issues a PUT request
    },
    query: {
        isArray: false
    }
  });
});