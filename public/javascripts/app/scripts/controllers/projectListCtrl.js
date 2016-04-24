angular.module("appModule").controller("projectListCtrl",
    ['$scope', 'ProjectFactory', '$controller', 'translateService', '$routeParams','utilService',
    function($scope, ProjectFactory, $controller, translateService, $routeParams,utilService){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.paginate = new Object();
    me.listProject = function(page){
        ProjectFactory.query(
            {page: page},
            function(data) {
                me.paginate.listPaginated = data.list;
                me.paginate.hasNextPage = data.hasNextPage;
                me.paginate.pageCount = data.pageCount;
                me.paginate.currentPage = data.currentPage;
            },
            function(response) {
                utilService.showMessageError(response.data);
            }
        );
    };

    //Remove Project
    me.removeProject = function(project){
        utilService.confirmPopup(translateService.translate('generic.deleteConfirmation', [project.name]),
            function(confirmed) {
                if(confirmed){
                ProjectFactory.remove({id: project.id}, function(){
                    me.listProject($routeParams.page);
                    utilService.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    utilService.showMessageError(response.data);
                });}
            }
        );
    }

    me.listProject($routeParams.page);
}]);