angular.module("appModule").controller("userDetailCtrl",function($scope, User, $location, $routeParams){
    $scope.user =  User.get({ id: $routeParams.id });
});