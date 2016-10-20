angular.module("samarth-coordinator")
    .controller("signinctrl", ['$scope',
        '$state',
        '$rootScope',
        'signinfactory',
        function($scope, $state, $rootScope, signinfactory) {
            $scope.errmsg = "";

            function redirectToIndex() {
                $state.go("index"); //Redirect the user to index state, assumption is, it will take care rerouting the user to a valid state 
            }

            if (signinfactory.isMember()) {
                //User is already signed in, hence do not load any thing 
                redirectToIndex();
                return;
            }

            //Submitting Signin form will call this function
            $scope.signin = function() {
                    $scope.errmsg = "";

                    signinfactory.signin($scope.user.email, $scope.user.pwd)
                        .then(function(user) {
                            redirectToIndex();
                        }, function(err) {
                            //If failed to signing, stay back in the same state and show the error message
                            console.log("Error in signin: ", err);
                            $scope.errmsg = err.message;
                        });
                } //signin ends
        }
    ]);
