angular.module("appModule").factory('UserFactory', function($resource) {
  return $resource('/users/:id',{ id: '@_id' },{
    update: {
        method: 'PUT' // this method issues a PUT request
    },
    query: {
        url:'/users/list/:page',
        isArray: false
    },
    all: {
        url:'/users/all',
        isArray: true
    }
  });
});