angular.module("samarth-coordinator")
    .controller("approotctrl", ['$scope',
        '$state',
        '$rootScope',
        'signinfactory',
        function($scope, $state, $rootScope, signinfactory) {

            $rootScope.showmenu = false;

            //Any Event, which trigger member as unauthorised, signout the user
            $rootScope.$on('member-unauthorized', function() {
                signinfactory.signout().then(function(res) {
                        $state.go("index");
                    },
                    function(res) {
                        console.log('Error in signing out ', res)
                        $state.go("index");
                    });
            });

            //Check the authentication for client side state routing/state change
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
                //if user is already traversing to index stage, ignore this check
                //Here ignore all those states, which need not have authentication 
                if (toState.name == 'index' || toState.name == 'index.signin' || toState.name == 'signout') {
                    //index state does not need prior authentication
                    return;
                }

                //If user is traversing to a state, which required authentication, ensure user is signed in member
                if (!signinfactory.isMember()) {
                    //If not a member, i.e., not authenticated, then redirect the user, sot hat user is authenticated
                    //Assumption is index state checks the auth state and does the necessary rerouting to signin
                    event.preventDefault(); // stop current execution
                    console.log("Redirecting user forciably to index state");
                    $state.go('index');
                    return;
                }
            });
        }
    ]); // samarthcoordinatorctrl ends
