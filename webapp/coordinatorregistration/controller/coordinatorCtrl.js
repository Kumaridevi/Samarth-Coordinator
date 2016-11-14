angular.module('samarth-coordinator')
    .service('profession', ['$http', function($http) {
        var objprofile = {};
        // var userdata = $window.localStorage["member-user"];
        // console.log(userdata);

        //gets the circle from neo4j and mongo
        objprofile.profession = function() {
            // console.log("ger citcle", userdata);

            return $http.get('/candidate/profession')
                .then(function(res) {
                    console.log("got ", res);
                    return res;
                }, function(error) {
                    // console.log(res);
                    return error;
                });
        }

        return objprofile;

    }]);
angular.module('samarth-coordinator')
    .service('register', ['$http', function($http) {

        return {

            registercoordinator: function(newcoordinator) {
                return $http.post('/coordinatorregister/createcoordinator',
                    newcoordinator);
            }


        }

    }]);

angular.module('samarth-coordinator')
    .controller('CoordinatorRegisterCtrl', ['$scope', 'register', 'profession',
        function($scope, register, profession) {


            profession.profession()
                .then(function success(response) {
                    //console.log(response);
                    $scope.professions = response.data;
                    console.log("----------", $scope.professions);
                }, function error(error) {
                    console.log("Error on inserting data");
                });

            $scope.signin = function(coordinator) {
                console.log("from service", coordinator);
                console.log("i have selected ", $scope.selectedprof);
                $scope.coordinator.profession = $scope.selectedprof.professions;
                register.registercoordinator($scope.coordinator)
                    .then(function success(response) {
                        $scope.status = "coordinator registered Successfully";
                        return response;
                    }, function error(error) {
                        console.log("Error on inserting data");
                    });


            }


        }
    ]);
