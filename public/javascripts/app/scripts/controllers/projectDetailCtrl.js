angular.module("appModule").controller("projectDetailCtrl",
    ['$scope', 'project',function($scope, project){
    var me = this;
    me.project =  project;
}]);