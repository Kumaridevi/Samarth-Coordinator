angular.module("samarth-coordinator")
    .controller('jobProfileCtrl', ['$scope', 'jobProfileService', '$stateParams', function($scope, jobProfileService, $stateParams) {
        console.log("JOB ID : Stateparams : " + $stateParams.jobID + $stateParams.employerID);
        jobProfileService.getJobDetails($stateParams.jobID, $stateParams.employerID)
            .then(function successCallback(response) {
                    console.log("Connected successfully" + response.data);
                    var job = response.data;
                    $scope.job = job[0];
                    console.log("ID" + $scope.job.jobID);
                },
                function errorCallback(response) {
                    console.log("some error occured");
                });
    }]);
