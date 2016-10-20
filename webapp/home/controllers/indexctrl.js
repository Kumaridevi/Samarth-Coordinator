angular.module("samarth-coordinator")
    .controller("indexctrl", ['$scope',
        '$rootScope',
        '$state',
        'signinfactory',
        function($scope, $rootScope, $state, signinfactory) {
            //From auth process, check who is the current signed in user
            if (!signinfactory.isMember()) {
                // console.log("Redirecting to signin state");
                $state.go("index.signin");
            } else {
                //user will be directed to state, which is assumed to be same as the name of the user's role
                //Ensure there is a state by name of the role, which is the default dashboard or landing state for the user
                var user = signinfactory.getCurrentUser();

                var landingStage = "index." + user.role;
                // console.log("Redirecting user landing page ", landingStage);
                $state.go(landingStage);
            }
        }
    ]); //indexctrl ends
