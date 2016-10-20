angular.module("samarth-coordinator")
    .controller('employerCtrl', ['$scope', 'employerService', function($scope, employerService) {
        $scope.registerEmployer = function() {
            employerService.employerRegister($scope.employer)
                .then(function successCallback(response) {
                        console.log("Connected successfully" + response.data);
                        $scope.message = "Employer Successfully registered";
                    },
                    function errorCallback(response) {
                        console.log("some error occured");
                        $scope.message = response.data;
                    }
                );
        }
        $scope.availability = function() {
            console.log("Inside availability" + $scope.employer.employerID);
            employerService.getEmployerByID($scope.employer.employerID)
                .then(function successCallback(response) {
                        console.log("Connected successfully" + response.data);
                        var job = response.data;
                        console.log(job.length);
                        //console.log("ID" + response.data);
                        if (job.length > 0) {
                            $scope.availableShow = false;
                            $scope.notAvailableShow = true;
                        } else {
                            $scope.availableShow = true;
                            $scope.notAvailableShow = false;
                        }
                    },
                    function errorCallback(response) {
                        console.log("some error occured");
                    }
                );
        }
    }]);
