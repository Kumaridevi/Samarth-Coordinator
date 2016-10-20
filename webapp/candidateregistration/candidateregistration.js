angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index.registercandidate', {
                url: '/candidateregistration',
                views: {
                    // "appbar": {
                    // 	templateUrl: 'home/templates/appbar.html',
                    // 	controller: 'Navbarcontroller'
                    // },
                    "content@": {
                        templateUrl: 'candidateregistration/templates/candidateregistration.html',
                        controller: 'candidateregistrationctrl'
                    },
                    "appbar@": {
                        templateUrl: '/home/templates/appbar.html',
                        controller: "appbarctrl"
                    }
                    // "footer": {
                    // 	templateUrl: 'home/templates/footer.html',
                    // }
                }
            });
    }]);
