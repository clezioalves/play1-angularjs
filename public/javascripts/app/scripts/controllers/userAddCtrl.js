angular.module("appModule").controller("userAddCtrl",
    ['$scope', 'UserFactory', '$controller', '$location', 'flash', 'translateService', 'occupations',
    function($scope, UserFactory, $controller, $location, flash, translateService, occupations){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    $scope.occupations = occupations;
    $scope.saveUser = function(user){
        UserFactory.save(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };

    $scope.labelOperation = translateService.translate('generic.New',[translateService.translate('users.User')])
}]);