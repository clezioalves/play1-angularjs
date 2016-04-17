angular.module("appModule").factory("flash",
    ['$rootScope', '$timeout', 'genericConfig',
    function($rootScope, $timeout, genericConfig) {
      var queue = [];
      var currentMessage = "";
      var isInfo = false;

      $rootScope.$on("$routeChangeSuccess", function() {
            currentMessage = queue.shift() || "";
      });

      return {
        getMessages: function() {
            return currentMessage;
        },
        setMessagesSuccess: function(message){
            queue.push(message);
            isInfo = true;
            $timeout(function(){
                isInfo = false;
                queue = [];
                currentMessage = "";
            }, genericConfig.timeSuccess);
        },
        isInfo: function(){
            return isInfo;
        }
     };
}]);