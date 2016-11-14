angular.module('samarth-coordinator')
    .service('employerService', ['$http', function($http) {
        this.getEmployerByID = function(employerID) {
            return $http.get('/employer/getbyemployerid/' + employerID);
        }
        this.employerRegister = function(employer) {
            return $http.post('/employer/registeremployer', employer);
        }
    }]);
