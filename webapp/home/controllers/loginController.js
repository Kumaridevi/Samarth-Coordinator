angular.module("samarth-coordinator")
    .controller("Logincontroller", ['$scope', '$state', '$rootScope', 'signinFactory',
        'signinService',
        function($scope, $state, $rootScope, signinFactory, signinService) {

            $rootScope.role = null;
            $rootScope.sidenav = null;
            $scope.showdiv = false;

            $scope.login = function() {

                // alert($scope.user.email);

                signinFactory.getUser($scope.user)
                    .then(function(user) {

                        console.log(user);
                        $state.go("home");
                        $rootScope.homebtn = true;
                    }, function(err) {
                        console.log("Error in signin: ", err);
                    });

            }; //login ends

        }
    ]);
