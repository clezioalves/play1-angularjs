angular.module("appModule").controller("userDetailCtrl",
    ['$scope', 'user',function($scope, user){
    var me = this;
    me.user =  user;
}]);