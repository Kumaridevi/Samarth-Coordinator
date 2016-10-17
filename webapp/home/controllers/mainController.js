angular.module("samarth-coordinator")
.controller("Maincontroller", ['$scope', '$state', '$rootScope', 'signinFactory', function myResponse($scope, $state, $rootScope, signinFactory) {

    // $rootScope.$on('$stateChangeStart',
    //     function(event, toState, toParams, fromState) {
    //             //index does not need authentication
    //             if (toState.name == 'index') {
    //                 return;
    //             }

    //             //If user is not authenticated, but trying to navigate to a state, force the user to login
    //             // if (!signinFactory.isMember()) {
    //             //     event.preventDefault(); // stop current execution
    //             //     $state.go('index');
    //             //     return;
    //             // }

    //         });

        // $rootScope.$on('member-unauthorized', function() {
        //     signinFactory.signout().then(function(res) {
        //             $state.go("index");
        //         },
        //         function(res) {
        //             console.log('Error in signing out ', res)
        //             $state.go("index");
        //         });
        // }); 

    }]); // Maincontroller ends
