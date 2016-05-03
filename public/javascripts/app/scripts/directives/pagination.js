angular.module("appModule").directive("pagination",['$location',function($location){
    return {
        restrict: 'E',
        templateUrl: _contextPath + 'public/javascripts/app/views/footerPaginate.html',
        scope: {
            paginate: '='
        },
        link: function(scope, element, attrs, ctrl) {
            scope.setCurrencyPage = function(page){
                $location.search('page', page);
            },
            scope.trackerPage = function(currentPage, pageCount){
                 var array = [];
                 var numTracker = 5;
                 var firstPage = currentPage - ((numTracker - 1) / 2);
                 var lastPage = currentPage + ((numTracker - 1) / 2);
                 if(currentPage - 1 > ((numTracker - 1) / 2)){
                     array.push('...');
                 }
                 if(firstPage <= 0){
                     lastPage = lastPage + 1 - firstPage;
                     firstPage = 1;
                 }
                 if(lastPage > pageCount){
                     firstPage -= lastPage - pageCount;
                     lastPage =  pageCount;
                     if(firstPage <= 0){
                         firstPage = 1;
                     }
                 }
                 var page = firstPage;
                 while(page <= lastPage){
                     array.push(parseInt(page, 10));
                     page++;
                 }

                 if((currentPage + (numTracker / 2)) <= pageCount){
                     array.push('...');
                 }
                 return array;
            }
        }
    }
}]);