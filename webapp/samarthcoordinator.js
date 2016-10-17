angular.module("samarth-coordinator", ["ngMaterial", "ui.router", "ngMessages", "LocalStorageModule", 'samarth-webcomponents'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state("index", {
        url: '/home',
        views: {
            "appbar": {
                templateUrl: 'home/templates/appbar.html',
                controller: 'Navbarcontroller'
            },
            "content": {
                templateUrl: "home/templates/loginView.html",
                controller: "Logincontroller"
            },
            "footer": {
                templateUrl: 'home/templates/footer.html',
            }

        }
    });
        //   .state("loginView", {
        //    url: '/home',
        //    views: {
        //     "appbar": {
        //       templateUrl: 'templates/appbar.html',
        //       controller: 'appCtrl'
        //     },
        //     "content@": {
        //      templateUrl: "templates/loginView.html",
        //      controller: "loginViewCtrl"
        //    },
        //    "footer": {
        //     templateUrl: 'templates/footer.html',
        //   }

        // }

        // })
        // .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        //     $urlRouterProvider.otherwise('/home');

        //     $stateProvider
        //     .state("index", {
        //         url: '/home',
        //         views: {
        //             "appbar": {
        //                 templateUrl: 'home/templates/appbar.html',
        //                 controller: 'Navbarcontroller'
        //             },
        //             "content@": {
        //                 templateUrl: "home/templates/loginView.html",
        //                 controller: "Logincontroller"
        //             },
        //             "footer": {
        //                 templateUrl: 'home/templates/footer.html',
        //             }

        //         }
        //     });



    }]); // config ends
