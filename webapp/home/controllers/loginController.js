angular.module("samarth-coordinator")
    .controller("Logincontroller", ['$scope', '$state', '$rootScope', 'signinFactory', 'localStorageService',
        'signinService',
        function($scope, $state, $rootScope, signinFactory, localStorageService, signinService) {

            $rootScope.role = null;
            $rootScope.sidenav = null;

            $scope.login = function() {

                // alert($scope.user.email);

                signinFactory.getUser($scope.user)
                    .then(function(user) {

                        console.log(user);
                        $state.go("home");
                    }, function(err) {
                        console.log("Error in signin: ", err);
                        // $scope.error = err.error;
                    });

            }; //login ends

            //     if (res.success == false) {
            //         alert("Authentication failed. User not found");
            //     } else {
            //         // $scope.role = data["0"].role;
            //         alert(JSON.stringify(res.data.data.role));
            //         $state.go("home");
            //     }
            // })
            // .catch(function(data) {
            //     console.log('Error: ' + data);
            // });

            // .success(function(response) {
            //  if(response.length == 0) {
            //      alert("You are not registered!");
            //  }
            //  else {
            //                   // alert("You are being redirected to your home page");
            //                   //alert(JSON.stringify(response[0].role));
            //                   $rootScope.role = response[0].role;
            //                   // alert($rootScope.role);
            //                      signinFactory.postSidenav($rootScope.role)
            //                       .success(function(response) {
            //                          // var a = JSON.stringify(response);
            //                          // alert(a);
            //                          signinService.settxt(response);
            //                          $state.go("home");
            //                   // $state.go("home", {response: a});
            //               })
            //               .error(function(error) {
            //                   alert("Error loading page");
            //               });

            //               }
            //           })
            // .error(function(error) {
            //  alert("Error loading page");
            // });

        }
    ]);
