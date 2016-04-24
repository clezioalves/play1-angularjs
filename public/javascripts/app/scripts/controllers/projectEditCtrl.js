angular.module("appModule").controller("projectEditCtrl",
    ['$scope', 'ProjectFactory', '$location', 'participants', '$controller', 'flash', '$cookies', 'translateService', 'project',
    function($scope, ProjectFactory, $location, participants, $controller, flash, $cookies, translateService, project){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.project = project;
    me.participants = participants;
    me.saveProject = function(project){
        ProjectFactory.update(project, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/projects");
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };
    me.labelOperation = translateService.translate('generic.Edit',[translateService.translate('projects.Project')])
    me.settingsMultiSelect = {
        scrollableHeight: '200px',
        scrollable: true,
        displayProp: 'name',
        idProp: 'id'
    };

    me.translateMultiSelect = {
        checkAll:translateService.translate('generic.checkAll'),
        uncheckAll:translateService.translate('generic.uncheckAll'),
        buttonDefaultText:translateService.translate('generic.select'),
        dynamicButtonTextSuffix:translateService.translate('generic.selected')
    };
}]);