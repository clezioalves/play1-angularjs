"use strict";
angular.module("appModule").factory('ProjectFactory',
    ['$resource', function($resource) {
      return $resource('/projects/:id',{ id: '@_id' },{
        update: {
            method: 'PUT' // this method issues a PUT request
        },
        query: {
            url:'/projects/list/:page',
            isArray: false
        }
    });
}]);