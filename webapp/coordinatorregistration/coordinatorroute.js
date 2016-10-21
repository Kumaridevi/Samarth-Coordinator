angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('registercoordinator', {
                url: '/coordinatorregistration',
                views: {
                    "appbar": {
                        // url: '/:response',
                        templateUrl: '/home/templates/appbar.html',
                        controller: 'appbarctrl'
                    },
                    "content@": {
                        templateUrl: 'coordinatorregistration/templates/coordinatorregistrationform.html',
                        controller: 'CoordinatorRegisterCtrl'
                    },
                    "footer": {
                        templateUrl: 'home/templates/footer.html',
                    }
                }
            });
    }]);
