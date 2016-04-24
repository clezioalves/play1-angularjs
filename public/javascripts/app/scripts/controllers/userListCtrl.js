angular.module("appModule").controller("userListCtrl",
    ['$scope', 'UserFactory', '$controller', 'translateService', '$routeParams','utilService',
    function($scope, UserFactory, $controller, translateService, $routeParams, utilService){
    var me = this;
    angular.extend(me, $controller('mainCtrl', {$scope: $scope}));
    me.paginate = new Object();
    me.listUser = function(page){
        UserFactory.query(
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

    //Remove User
    me.removeUser = function(user){
        utilService.confirmPopup(translateService.translate('generic.deleteConfirmation', [user.name]),
            function(confirmed) {
                if(confirmed){
                UserFactory.remove({id: user.id}, function(){
                    me.listUser($routeParams.page);
                    utilService.showMessageSuccess(translateService.translate('generic.deleted'));
                },function(response){
                    utilService.showMessageError(response.data);
                });}
            }
        );
    }
    me.listUser($routeParams.page);
}]);