angular.module('samarth-coordinator')
    .service('jobProfileService', ['$http', function($http) {
        this.getJobDetails = function(jobID, employerID) {
            return $http.get('http://localhost:8081/jobprofile/getjobdetail/' + jobID + "/" + employerID);
        }
        this.getJobByID = function(jobID) {
            return $http.get('http://localhost:8081/jobprofile/getbyjobid/' + jobID);
        }
        this.getAllCompanies = function() {
            return $http.get('http://localhost:8081/employer/getemployers');
        }
        this.postJob = function(job) {
            return $http.post('http://localhost:8081/jobprofile/jobpost', job);
        }
        this.updateJob = function(job) {
            return $http.patch('http://localhost:8081/jobprofile/jobupdate', job);
        }
        this.checkAvailablity = function(jobID, employerID) {
            return $http.get('http://localhost:8081/jobprofile/checkidavailable/' + jobID + "/" + employerID);
        }
    }]);
