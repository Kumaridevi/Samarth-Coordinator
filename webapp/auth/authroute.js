angular.module("samarth-coordinator")
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state("index.signin", {
                    url: '/signin',
                    views: {
                        "content@": {
                            templateUrl: "/auth/templates/signinview.html",
                            controller: "signinctrl"
                        }
                    }
                })
                .state("signout", {
                    url: '/signout',
                    views: {
                        "content": {
                            controller: 'signoutctrl'
                        }
                    }
                }); //state ends
        }
    ]); // config ends
