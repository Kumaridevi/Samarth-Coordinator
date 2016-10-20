angular.module('samarth-coordinator')
    .service('employerService', ['$http', function($http) {
        this.getEmployerByID = function(employerID) {
            return $http.get('http://localhost:8081/employer/getbyemployerid/' + employerID);
        }
        this.employerRegister = function(employer) {
            return $http.post('http://localhost:8081/employer/registeremployer', employer);
        }
    }]);
