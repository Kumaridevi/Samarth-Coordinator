angular.module('samarth-coordinator').service('candidateservice', ['$http', function($http) {

    return {
        getcandidatedata: function() {

            return $http({
                method: 'get',
                url: 'http://localhost:8081/skillcard/searchcandidate/'
            }).then(function success(response) {

                console.log("candidateservice", response.data.results);

                return response.data.results;
            }, function error(response) {
                console.log("error");
            });
        }
    }


}]);
