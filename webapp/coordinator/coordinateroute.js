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
                        }
                    } //end of views
                }); //state ends
        } //end of config function
    ]); //config ends
