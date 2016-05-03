angular.module("appModule").factory('OccupationFactory',
    ['$resource', function($resource) {
      return $resource(_contextPath + 'occupations/:id',{ id: '@_id' },{
        update: {
            method: 'PUT' // this method issues a PUT request
        },
        query: {
            url:_contextPath + 'occupations/list/:page',
            isArray: false
        },
        all: {
            url:_contextPath + 'occupations/all',
            isArray: true
        }
    });
}]);