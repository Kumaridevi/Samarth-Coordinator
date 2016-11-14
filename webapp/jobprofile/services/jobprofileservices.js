angular.module('samarth-coordinator')
    .service('jobProfileService', ['$http', function($http) {
        this.getJobDetails = function(jobID, employerID) {
            return $http.get('/jobprofile/getjobdetail/' + jobID + "/" +
                employerID);
        }
        this.getJobByID = function(jobID) {
            return $http.get('/jobprofile/getbyjobid/' + jobID);
        }
        this.getAllCompanies = function() {
            return $http.get('/employer/getemployers');
        }
        this.postJob = function(job) {
            return $http.post('/jobprofile/jobpost', job);
        }
        this.updateJob = function(job) {
            return $http.patch('/jobprofile/jobupdate', job);
        }
        this.checkAvailablity = function(jobID, employerID) {
            return $http.get('/jobprofile/checkidavailable/' + jobID + "/" +
                employerID);
        }
    }]);
