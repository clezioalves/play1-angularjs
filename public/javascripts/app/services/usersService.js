angular.module("appModule").factory('User', function($resource) {
  return $resource('/users/:id',{ id: '@_id' });
});