angular.module("appModule").controller("occupationEditCtrl",
    ['$scope', 'OccupationFactory', '$location', 'occupation', '$controller', 'flash', '$cookies', 'translateService',
    function($scope, OccupationFactory, $location, occupation, $controller, flash, $cookies, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    $scope.occupation = occupation;
    $scope.saveOccupation = function(occupation){
        OccupationFactory.update(occupation, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/occupations");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };
    $scope.labelOperation = translateService.translate('generic.Edit',[translateService.translate('occupations.Occupation')])
}]);