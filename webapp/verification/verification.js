angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('verification', {
                    url: "verification/:outcome/:id",
                    templateUrl: "verification/templates/skillcard.html"


                })

            .state('verifying', {
                url: 'verify/:id',
                views: {
                    "main": {
                        templateUrl: "verification/templates/viewprofileverify.html",
                        controller: "VerificationCtrl"

                    }
                }
            });
        }

    ]);
