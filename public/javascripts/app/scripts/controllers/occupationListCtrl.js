angular.module("appModule").controller("occupationListCtrl",
    ['$scope', 'OccupationFactory', '$controller', 'translateService', '$routeParams','utilService',
    function($scope, OccupationFactory, $controller, translateService, $routeParams,utilService){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.paginate = new Object();
    me.listOccupation = function(page){
        OccupationFactory.query(
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

    //Remove Occupation
    me.removeOccupation = function(occupation){
        utilService.confirmPopup(translateService.translate('generic.deleteConfirmation', [occupation.name]),
            function(confirmed) {
                if(confirmed){
                OccupationFactory.remove({id: occupation.id}, function(){
                    me.listOccupation($routeParams.page);
                    utilService.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    utilService.showMessageError(response.data);
                });}
            }
        );
    }

    me.listOccupation($routeParams.page);
}]);