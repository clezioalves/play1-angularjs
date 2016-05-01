angular.module("appModule").controller("userEditCtrl",
    ['$scope', 'UserFactory', '$location', 'user', 'occupations', '$controller', 'flash', '$cookies', 'translateService','utilService',
    function($scope, UserFactory, $location, user, occupations, $controller, flash, $cookies, translateService,utilService){
    var me = this;
    angular.extend(this, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    me.user = user;
    me.occupations = occupations;
    me.saveUser = function(user){
        UserFactory.update(user, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/users");
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };
    me.labelOperation = translateService.translate('generic.Edit',[translateService.translate('users.User')])
}]);