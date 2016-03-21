angular.module("appModule").config(function($routeProvider, $httpProvider){

    $routeProvider.when("/",{
        templateUrl: '/public/views-angular/home.html'
    });

    $routeProvider.when("/users",{
        templateUrl: '/public/views-angular/users/userList.html',
        controller: "userListCtrl",
        resolve: {
            users: function(User){
                return User.query();
            }
        }
    });

    $routeProvider.when("/users/form",{
        templateUrl: '/public/views-angular/users/userForm.html',
        controller: "userFormCtrl"
    })

    $routeProvider.when("/users/detail/:id",{
        templateUrl: '/public/views-angular/users/userDetail.html',
        controller: "userDetailCtrl"
    })

   $routeProvider.otherwise({
     redirectTo: '/'
   });
});