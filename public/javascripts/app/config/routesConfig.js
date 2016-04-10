angular.module("appModule").config(function($routeProvider, $httpProvider){

    $routeProvider.when("/",{
        templateUrl: '/public/views-angular/home.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    //User
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
            user: function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            }
        }
    });
    $routeProvider.when("/users/detail/:id",{
        templateUrl: '/public/views-angular/users/userDetail.html',
        controller: "userDetailCtrl",
        resolve: {
            user: function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            }
        }
    });

    //Occupation
    $routeProvider.when("/occupations",{
        templateUrl: '/public/views-angular/occupations/occupationList.html',
        controller: "occupationListCtrl"
    });
    $routeProvider.when("/occupations/form",{
        templateUrl: '/public/views-angular/occupations/occupationForm.html',
        controller: "occupationAddCtrl"
    });
    $routeProvider.when("/occupations/edit/:id",{
        templateUrl: '/public/views-angular/occupations/occupationForm.html',
        controller: "occupationEditCtrl",
        resolve: {
            occupation: function($route, OccupationFactory) {
                 return OccupationFactory.get({ id: $route.current.params.id })
            }
        }
    });
    $routeProvider.when("/occupations/detail/:id",{
        templateUrl: '/public/views-angular/occupations/occupationDetail.html',
        controller: "occupationDetailCtrl",
        resolve: {
            occupation: function($route, OccupationFactory) {
                 return OccupationFactory.get({ id: $route.current.params.id })
            }
        }
    });
});