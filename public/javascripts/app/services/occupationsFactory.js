angular.module("appModule").factory('OccupationFactory', function($resource) {
  return $resource('/occupations/:id',{ id: '@_id' },{
    update: {
        method: 'PUT' // this method issues a PUT request
    },
    query: {
        url:'/occupations/list/:page',
        isArray: false
    }
  });
});