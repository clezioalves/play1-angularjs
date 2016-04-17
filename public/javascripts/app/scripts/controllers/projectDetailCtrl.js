angular.module("appModule").controller("projectDetailCtrl",
    ['$scope', 'project',function($scope, project){
    $scope.project =  project;
}]);