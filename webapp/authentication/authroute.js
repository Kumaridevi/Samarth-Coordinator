angular.module("samarth-coordinator")
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        // $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("signout", {
                // 			url: '/home',
                views: {
                    "content@": {
                        controller: 'Signoutcontroller'
                    }
                }
            });

    }]); //config ends
