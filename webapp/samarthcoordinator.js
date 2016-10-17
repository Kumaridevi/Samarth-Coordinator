// << << << < HEAD
// // angular.module('samarth-coordinator',['ngMaterial',
// //  'ngAnimate',
// //  'ui.router',
// //  'samarth-webcomponents']);
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


    }]); // config ends

// angular.module('samarth-coordinator',['ngMaterial',
//  'ngAnimate',
//  'ui.router',
//  'ngMessages',
//  'samarth-webcomponents']).config(function ($mdThemingProvider) {

//  });
//  ;
// >>>>>>> 479c2e3a62cb437d68197d892ed3e8b9aa46c554
