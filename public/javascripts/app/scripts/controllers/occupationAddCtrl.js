angular.module("appModule").controller("occupationAddCtrl",
    ['$scope', 'OccupationFactory', '$controller', '$location', 'flash', 'translateService',
    function($scope, OccupationFactory, $controller, $location, flash, translateService){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.saveOccupation = function(occupation){
        OccupationFactory.save(occupation, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/occupations");
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };
    me.labelOperation = translateService.translate('generic.New',[translateService.translate('occupations.Occupation')])
}]);