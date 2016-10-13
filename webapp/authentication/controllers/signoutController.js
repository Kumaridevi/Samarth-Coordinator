angular.module("samarth-coordinator")
    .controller("Signoutcontroller", ['$scope', '$state', '$rootScope', 'signinFactory', 'localStorageService',
        function($scope, $state, $rootScope, signinFactory, localStorageService) {

            $scope.signout = function() {
                // localStorageService.remove("User");
                signinFactory.signout()
                    .then(function(res) {
                            //Alternatively you can redirect user to landing page
                            // $rootScope.$emit("callparentmethod", {});
                            $state.go("index");
                        },
                        function(err) {
                            // $scope.error = err;
                            $state.go("index");
                        });
            }
            $scope.signout();

        }
    ]);
