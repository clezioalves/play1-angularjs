angular.module("appModule").controller("projectAddCtrl",
    ['$scope', 'ProjectFactory', '$controller', '$location', 'flash', 'translateService', 'participants',
    function($scope, ProjectFactory, $controller, $location, flash, translateService, participants){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope}));
    $scope.participants = participants;
    $scope.saveProject = function(project){
        ProjectFactory.save(project, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/projects");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };

    $scope.labelOperation = translateService.translate('generic.New',[translateService.translate('projects.Project')]);
    $scope.project = new Object();
    $scope.project.participants = [];

    $scope.settingsMultiSelect = {
        scrollableHeight: '200px',
        scrollable: true,
        displayProp: 'name',
        idProp: 'id'
    };

    $scope.translateMultiSelect = {
        checkAll:translateService.translate('generic.checkAll'),
        uncheckAll:translateService.translate('generic.uncheckAll'),
        buttonDefaultText:translateService.translate('generic.select'),
        dynamicButtonTextSuffix:translateService.translate('generic.selected')
    };
}]);