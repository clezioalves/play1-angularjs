angular.module("appModule").factory('ProjectFactory', function($resource) {
  return $resource('/projects/:id',{ id: '@_id' },{
    update: {
        method: 'PUT' // this method issues a PUT request
    },
    query: {
        url:'/projects/list/:page',
        isArray: false
    }
  });
});