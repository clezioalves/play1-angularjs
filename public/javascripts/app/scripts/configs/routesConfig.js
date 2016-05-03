angular.module("appModule").config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    //User
    $routeProvider.when("/users",{
        templateUrl: _contextPath + 'public/javascripts/app/views/users/userList.html',
        controller: "userListCtrl",
        controllerAs: 'ctrl'
    }).when("/users/form",{
        templateUrl: _contextPath + 'public/javascripts/app/views/users/userForm.html',
        controller: "userAddCtrl",
        controllerAs: 'ctrl',
        resolve: {
            occupations: ['OccupationFactory',function(OccupationFactory) {
                 return OccupationFactory.all()
            }]
        }
    }).when("/users/edit/:id",{
        templateUrl: _contextPath + 'public/javascripts/app/views/users/userForm.html',
        controller: "userEditCtrl",
        controllerAs: 'ctrl',
        resolve: {
            user: ['$route', 'UserFactory',function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            }],
            occupations: ['OccupationFactory',function(OccupationFactory) {
                 return OccupationFactory.all()
            }]
        }
    }).when("/users/detail/:id",{
        templateUrl: _contextPath + 'public/javascripts/app/views/users/userDetail.html',
        controller: "userDetailCtrl",
        controllerAs: 'ctrl',
        resolve: {
            user: ['$route', 'UserFactory',function($route, UserFactory) {
                 return UserFactory.get({ id: $route.current.params.id })
            }]
        }
    })
    //Occupation
    .when("/occupations",{
        templateUrl: _contextPath + 'public/javascripts/app/views/occupations/occupationList.html',
        controller: "occupationListCtrl",
        controllerAs: 'ctrl'
    }).when("/occupations/form",{
        templateUrl: _contextPath + 'public/javascripts/app/views/occupations/occupationForm.html',
        controller: "occupationAddCtrl",
        controllerAs: 'ctrl'
    }).when("/occupations/edit/:id",{
        templateUrl: _contextPath + 'public/javascripts/app/views/occupations/occupationForm.html',
        controller: "occupationEditCtrl",
        controllerAs: 'ctrl',
        resolve: {
            occupation: ['$route', 'OccupationFactory',function($route, OccupationFactory) {
                 return OccupationFactory.get({ id: $route.current.params.id })
            }]
        }
    }).when("/occupations/detail/:id",{
        templateUrl: _contextPath + 'public/javascripts/app/views/occupations/occupationDetail.html',
        controller: "occupationDetailCtrl",
        controllerAs: 'ctrl',
        resolve: {
            occupation: ['$route', 'OccupationFactory',function($route, OccupationFactory) {
                 return OccupationFactory.get({ id: $route.current.params.id })
            }]
        }
    })
    //Project
    .when("/projects",{
        templateUrl: _contextPath + 'public/javascripts/app/views/projects/projectList.html',
        controller: "projectListCtrl",
        controllerAs: 'ctrl'
    }).when("/projects/form",{
        templateUrl: _contextPath + 'public/javascripts/app/views/projects/projectForm.html',
        controller: "projectAddCtrl",
        controllerAs: 'ctrl',
        resolve: {
            participants: ['UserFactory',function(UserFactory) {
                 return UserFactory.all()
            }]
        }
    }).when("/projects/edit/:id",{
        templateUrl: _contextPath + 'public/javascripts/app/views/projects/projectForm.html',
        controller: "projectEditCtrl",
        controllerAs: 'ctrl',
        resolve: {
            project: ['$route','ProjectFactory',function($route, ProjectFactory) {
                 return ProjectFactory.get({ id: $route.current.params.id })
            }],
            participants: ['UserFactory',function(UserFactory) {
                 return UserFactory.all()
            }]
        }
    }).when("/projects/detail/:id",{
        templateUrl: _contextPath + 'public/javascripts/app/views/projects/projectDetail.html',
        controller: "projectDetailCtrl",
        controllerAs: 'ctrl',
        resolve: {
            project: ['$route','ProjectFactory',function($route, ProjectFactory) {
                 return ProjectFactory.get({ id: $route.current.params.id })
            }]
        }
    }).otherwise({
        redirectTo: '/projects'
    });
}]);