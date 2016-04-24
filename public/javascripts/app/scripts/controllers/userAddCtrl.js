angular.module("appModule").controller("userAddCtrl",
    ['$scope', 'UserFactory', '$controller', '$location', 'flash', 'translateService', 'occupations',
    function($scope, UserFactory, $controller, $location, flash, translateService, occupations){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.occupations = occupations;
    me.saveUser = function(user){
        UserFactory.save(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };

    me.labelOperation = translateService.translate('generic.New',[translateService.translate('users.User')])
}]);