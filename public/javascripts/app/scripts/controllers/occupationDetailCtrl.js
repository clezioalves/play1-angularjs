angular.module("appModule").controller("occupationDetailCtrl",
    ['$scope', 'occupation',function($scope, occupation){
    var me = this;
    me.occupation =  occupation;
}]);