angular.module("appModule").factory('User', function($resource) {
  return $resource('/users/crud/:id',{ id: '@_id' });
});