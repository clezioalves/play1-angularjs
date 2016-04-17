angular.module("appModule").controller("occupationDetailCtrl",
    ['$scope', 'occupation',function($scope, occupation){
    $scope.occupation =  occupation;
}]);