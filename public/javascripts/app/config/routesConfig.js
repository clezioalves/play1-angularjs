angular.module("appModule").config(function($routeProvider, $httpProvider){

    $routeProvider.when("/",{
        templateUrl: '/public/views-angular/home.html'
    });

    $routeProvider.when("/users",{
        templateUrl: '/public/views-angular/users/userList.html',
        controller: "userListCtrl"
    });

    $routeProvider.when("/users/form",{
        templateUrl: '/public/views-angular/users/userForm.html',
        controller: "userAddCtrl"
    });

    $routeProvider.when("/users/edit/:id",{
        templateUrl: '/public/views-angular/users/userForm.html',
        controller: "userEditCtrl",
        resolve: {
            user: function($route, UserService) {
                 return UserService.get({ id: $route.current.params.id })
            }
        }
    });

    $routeProvider.when("/users/detail/:id",{
        templateUrl: '/public/views-angular/users/userDetail.html',
        controller: "userDetailCtrl",
        resolve: {
            user: function($route, UserService) {
                 return UserService.get({ id: $route.current.params.id })
            }
        }
    });

   $routeProvider.otherwise({
     redirectTo: '/'
   });
});