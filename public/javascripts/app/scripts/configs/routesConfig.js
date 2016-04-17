angular.module("appModule").config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){

    $routeProvider.when("/",{
        redirectTo: '/projects'
    });

    //User
    $routeProvider.when("/users",{
        templateUrl: '/public/javascripts/app/views/users/userList.html',
        controller: "userListCtrl"
    });
    $routeProvider.when("/users/form",{
        templateUrl: '/public/javascripts/app/views/users/userForm.html',
        controller: "userAddCtrl",
        resolve: {
            occupations: ['OccupationFactory',function(OccupationFactory) {
                 return OccupationFactory.all()
            }]
        }
    });
    $routeProvider.when("/users/edit/:id",{
        templateUrl: '/public/javascripts/app/views/users/userForm.html',
        controller: "userEditCtrl",
        resolve: {
            user: ['$route', 'UserFactory',function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            }],
            occupations: ['OccupationFactory',function(OccupationFactory) {
                 return OccupationFactory.all()
            }]
        }
    });
    $routeProvider.when("/users/detail/:id",{
        templateUrl: '/public/javascripts/app/views/users/userDetail.html',
        controller: "userDetailCtrl",
        resolve: {
            user: ['$route', 'UserFactory',function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            }]
        }
    });

    //Occupation
    $routeProvider.when("/occupations",{
        templateUrl: '/public/javascripts/app/views/occupations/occupationList.html',
        controller: "occupationListCtrl"
    });
    $routeProvider.when("/occupations/form",{
        templateUrl: '/public/javascripts/app/views/occupations/occupationForm.html',
        controller: "occupationAddCtrl"
    });
    $routeProvider.when("/occupations/edit/:id",{
        templateUrl: '/public/javascripts/app/views/occupations/occupationForm.html',
        controller: "occupationEditCtrl",
        resolve: {
            occupation: ['$route', 'OccupationFactory',function($route, OccupationFactory) {
                 return OccupationFactory.get({ id: $route.current.params.id })
            }]
        }
    });
    $routeProvider.when("/occupations/detail/:id",{
        templateUrl: '/public/javascripts/app/views/occupations/occupationDetail.html',
        controller: "occupationDetailCtrl",
        resolve: {
            occupation: ['$route', 'OccupationFactory',function($route, OccupationFactory) {
                 return OccupationFactory.get({ id: $route.current.params.id })
            }]
        }
    });

    //Project
    $routeProvider.when("/projects",{
        templateUrl: '/public/javascripts/app/views/projects/projectList.html',
        controller: "projectListCtrl"
    });
    $routeProvider.when("/projects/form",{
        templateUrl: '/public/javascripts/app/views/projects/projectForm.html',
        controller: "projectAddCtrl",
        resolve: {
            participants: ['UserFactory',function(UserFactory) {
                 return UserFactory.all()
            }]
        }
    });
    $routeProvider.when("/projects/edit/:id",{
        templateUrl: '/public/javascripts/app/views/projects/projectForm.html',
        controller: "projectEditCtrl",
        resolve: {
            project: ['$route','ProjectFactory',function($route, ProjectFactory) {
                 return ProjectFactory.get({ id: $route.current.params.id })
            }],
            participants: ['UserFactory',function(UserFactory) {
                 return UserFactory.all()
            }]
        }
    });
    $routeProvider.when("/projects/detail/:id",{
        templateUrl: '/public/javascripts/app/views/projects/projectDetail.html',
        controller: "projectDetailCtrl",
        resolve: {
            project: ['$route','ProjectFactory',function($route, ProjectFactory) {
                 return ProjectFactory.get({ id: $route.current.params.id })
            }]
        }
    });

    $routeProvider.otherwise({
        redirectTo: '/projects'
    });
}]);