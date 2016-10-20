angular.module("samarth-coordinator")
    .service("jobSearchService", ['$http', function($http) {
        this.jobResult = function(jobID) {
            return $http.get('http://localhost:8081/jobProfile/getByJobID/' + jobID);
        }
    }]);
