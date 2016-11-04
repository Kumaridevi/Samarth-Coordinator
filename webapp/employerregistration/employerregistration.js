angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('index.registerEmployer', {
                    url: '/employerRegister',
                    views: {
                        "appbar@": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'appbarctrl'
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
