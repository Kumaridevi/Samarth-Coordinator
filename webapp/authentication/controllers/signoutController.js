angular.module("samarth-coordinator")
    .controller("Signoutcontroller", ['$scope', '$state', '$rootScope', 'signinFactory',
        function($scope, $state, $rootScope, signinFactory) {

            $scope.signout = function() {
                signinFactory.signout()
                    .then(function(res) {
                            //Alternatively you can redirect user to landing page
                            $state.go("index");
                            $rootScope.homebtn = false;
                        },
                        function(err) {
                            // $scope.error = err;
                            $state.go("index");
                            $rootScope.homebtn = false;
                        });
            }
            $scope.signout();

        }
    ]);
