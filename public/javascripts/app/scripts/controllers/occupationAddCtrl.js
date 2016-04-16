"use strict";
angular.module("appModule").controller("occupationAddCtrl",
    ['$scope', 'OccupationFactory', '$controller', '$location', 'flash', 'translateService',
    function($scope, OccupationFactory, $controller, $location, flash, translateService){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    $scope.saveOccupation = function(occupation){
        OccupationFactory.save(occupation, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/occupations");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };

    $scope.labelOperation = translateService.translate('generic.New',[translateService.translate('occupations.Occupation')])
}]);