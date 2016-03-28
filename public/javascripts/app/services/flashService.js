angular.module("appModule").factory("flash", function($rootScope, $timeout) {
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
        },2000);
    },
    isInfo: function(){
        return isInfo;
    }
  };
});