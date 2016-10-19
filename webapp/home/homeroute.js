angular.module("samarth-coordinator")
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/index');

            $stateProvider
                .state("index", {
                    url: '/index',
                    views: {
                        "appbar": {
                            templateUrl: '/home/templates/appbar.html'
                                // controller: 'appbarctrl'
                        },
                        "content": {
                            controller: "indexctrl"
                        },
                        "footer": {
                            templateUrl: '/home/templates/footer.html'
                        }
                    } //end of views
                }); //state ends
        } //end of config function
    ]); //config ends


/*angular.module("samarth-coordinator")
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/index');

            $stateProvider
                .state("index", {
                    url: '/index',
                    views: {
                        "content": {
                            controller: 'indexctrl'
                        }
                    }

                });
        }
    ]); // config ends

*/
