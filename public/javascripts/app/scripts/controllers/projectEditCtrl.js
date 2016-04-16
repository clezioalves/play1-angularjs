"use strict";
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
}]);