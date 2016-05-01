angular.module("appModule").controller("occupationEditCtrl",
    ['$scope', 'OccupationFactory', '$location', 'occupation', '$controller', 'flash', 'translateService','utilService',
    function($scope, OccupationFactory, $location, occupation, $controller, flash, translateService,utilService){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    me.occupation = occupation;
    me.saveOccupation = function(occupation){
        OccupationFactory.update(occupation, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/occupations");
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };
    me.labelOperation = translateService.translate('generic.Edit',[translateService.translate('occupations.Occupation')])
}]);