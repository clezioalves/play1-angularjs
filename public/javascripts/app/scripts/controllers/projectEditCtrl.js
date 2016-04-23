angular.module("appModule").controller("projectEditCtrl",
    ['$scope', 'ProjectFactory', '$location', 'participants', '$controller', 'flash', '$cookies', 'translateService', 'project',
    function($scope, ProjectFactory, $location, participants, $controller, flash, $cookies, translateService, project){
    angular.extend(this, $controller('mainCtrl', {$scope: $scope, flash: flash}));
    $scope.project = project;
    $scope.participants = participants;
    $scope.saveProject = function(project){
        ProjectFactory.update(project, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/projects");
            },
            function(response) {
                $scope.showMessageError(response.data);
            }
        );
    };
    $scope.labelOperation = translateService.translate('generic.Edit',[translateService.translate('projects.Project')])
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