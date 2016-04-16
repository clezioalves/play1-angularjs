"use strict";
angular.module("appModule").controller("userEditCtrl",
    ['$scope', 'UserFactory', '$location', 'user', 'occupations', '$controller', 'flash', '$cookies', 'translateService',
    function($scope, UserFactory, $location, user, occupations, $controller, flash, $cookies, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    $scope.user = user;
    $scope.occupations = occupations;
    $scope.saveUser = function(user){
        UserFactory.update(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };
    $scope.labelOperation = translateService.translate('generic.Edit',[translateService.translate('users.User')])
}]);