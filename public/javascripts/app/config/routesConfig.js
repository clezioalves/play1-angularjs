angular.module("appModule").config(function($routeProvider, $httpProvider){

    $routeProvider.when("/",{
        //templateUrl: '/public/views-angular/home.html'
        redirectTo: '/projects'
    });

    $routeProvider.otherwise({
        redirectTo: '/projects'
    });

    //User
    $routeProvider.when("/users",{
        templateUrl: '/public/views-angular/users/userList.html',
        controller: "userListCtrl"
    });
    $routeProvider.when("/users/form",{
        templateUrl: '/public/views-angular/users/userForm.html',
        controller: "userAddCtrl",
        resolve: {
            occupations: function(OccupationFactory) {
                 return OccupationFactory.all()
            }
        }
    });
    $routeProvider.when("/users/edit/:id",{
        templateUrl: '/public/views-angular/users/userForm.html',
        controller: "userEditCtrl",
        resolve: {
            user: function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            },
            occupations: function(OccupationFactory) {
                 return OccupationFactory.all()
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

    //Project
    $routeProvider.when("/projects",{
        templateUrl: '/public/views-angular/projects/projectList.html',
        controller: "projectListCtrl"
    });
    $routeProvider.when("/projects/form",{
        templateUrl: '/public/views-angular/projects/projectForm.html',
        controller: "projectAddCtrl",
        resolve: {
            participants: function(UserFactory) {
                 return UserFactory.all()
            }
        }
    });
    $routeProvider.when("/projects/edit/:id",{
        templateUrl: '/public/views-angular/projects/projectForm.html',
        controller: "projectEditCtrl",
        resolve: {
            project: function($route, ProjectFactory) {
                 return ProjectFactory.get({ id: $route.current.params.id })
            },
            participants: function(UserFactory) {
                 return UserFactory.all()
            }
        }
    });
    $routeProvider.when("/projects/detail/:id",{
        templateUrl: '/public/views-angular/projects/projectDetail.html',
        controller: "projectDetailCtrl",
        resolve: {
            project: function($route, ProjectFactory) {
                 return ProjectFactory.get({ id: $route.current.params.id })
            }
        }
    });
});