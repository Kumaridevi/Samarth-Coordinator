angular.module("samarth-coordinator")
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state("index.coordinator", {
                    url: '/coordinator',
                    views: {
                        "content@": {
                            templateUrl: '/coordinator/templates/crdtrdashboard.html',
                            controller: "crdtrdashboardctrl"
                        },
                        "appbar@": {
                            templateUrl: '/home/templates/appbar.html',
                            controller: "appbarctrl"
                        }
                    } //end of views
                }); //state ends
        } //end of config function
    ]); //config ends
