angular.module("appModule").factory('utilService',
    ['translateService','Flash','genericConfig', function(translateService,Flash,genericConfig) {

        return {
              confirmPopup: function(message, callback) {
                    bootbox.confirm({
                      size: 'small',
                      title: translateService.translate('generic.Attention')+"!",
                      message: message,
                      buttons: {
                          confirm: {
                            label: translateService.translate('generic.Confirm')
                          },
                          cancel: {
                            label: translateService.translate('generic.Cancel')
                          }
                      },
                      callback: callback
                    })
              },
              //Message success
              showMessageSuccess: function(messages){
                    if (Object.prototype.toString.call(messages) != '[object Array]') {
                      messages = new Array(messages);
                    }
                    var listHtml = "<ul>";
                    messages.forEach(function(msg){
                      listHtml += "<li>" + msg + "</li>";
                    });
                    listHtml += "</ul>";
                    Flash.create('success',
                      '<strong> '+translateService.translate('generic.Done')+'! </strong>' +
                      listHtml, genericConfig.timeSuccess, {class: 'ng-alert'});
              },
              //Message error
              showMessageError: function(messages){
                    if (Object.prototype.toString.call(messages) != '[object Array]') {
                        messages = new Array(messages);
                    }
                    var listHtml = "<ul>";
                    messages.forEach(function(msg){
                        listHtml += "<li>" + msg + "</li>";
                    });
                    listHtml += "</ul>";

                    Flash.create('danger',
                        '<strong> '+translateService.translate('generic.Oops')+'! </strong>' +
                        listHtml, genericConfig.timeError, {class: 'ng-alert'});
              },
              trackerPage: function(currentPage, pageCount){
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
}]);