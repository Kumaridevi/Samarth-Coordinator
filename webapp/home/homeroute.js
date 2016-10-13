angular.module("samarth-coordinator")
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        // $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("home", {
                // url: "/:response",
                views: {
                    "appbar": {
                        // url: '/:response',
                        templateUrl: '/home/templates/appbar.html',
                        controller: 'Navbarcontroller'
                    },
                    "content@": {
                        templateUrl: "/home/templates/homeView.html",
                        controller: "Logincontroller"
                    },
                    "footer": {
                        templateUrl: '/home/templates/footer.html',
                    }

                }

            })
            .state("/", {
                template: ""
            });


    }]); //config ends
