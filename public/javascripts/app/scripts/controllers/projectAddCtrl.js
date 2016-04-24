angular.module("appModule").controller("projectAddCtrl",
    ['$scope','ProjectFactory','$controller','$location','flash','translateService','participants','utilService',
    function($scope,ProjectFactory,$controller,$location,flash,translateService,participants,utilService){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.participants = participants;
    me.saveProject = function(project){
        ProjectFactory.save(project, function(){
                flash.setMessagesSuccess(translateService.translate('generic.saved'));
                $location.path("/projects");
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };

    me.labelOperation = translateService.translate('generic.New',[translateService.translate('projects.Project')]);
    me.project = new Object();
    me.project.participants = [];

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