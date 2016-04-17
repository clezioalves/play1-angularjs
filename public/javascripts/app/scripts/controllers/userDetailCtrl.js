angular.module("appModule").controller("userDetailCtrl",
    ['$scope', 'user',function($scope, user){
    $scope.user =  user;
}]);