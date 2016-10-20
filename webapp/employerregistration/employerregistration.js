angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('registerEmployer', {
                    url: '/employerRegister',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'Navbarcontroller'
                        },
                        "content@": {
                            templateUrl: 'employerregistration/templates/employerregistration.html',
                            controller: 'employerCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    }
                })
        }
    ]);
