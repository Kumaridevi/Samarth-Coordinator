angular.module('samarth-coordinator').service('candidateservice', ['$http', function($http) {

    return {
        getcandidatedata: function() {

            return $http({
                method: 'get',
                url: 'http://localhost:8081/skillcard/searchcandidate/'
            }).then(function success(response) {

               // console.log("candidateservice", response.data.results);

               return response.data.results;
           }, function error(response) {
            console.log("error");
        });
        }
    }
}]);

angular.module('samarth-coordinator').service('parseservice', ['$http', function($http) {
    return{

        parsetext: function(arr) {
            return $http({
                method:'post',
                url:'http://localhost:8081/candidate/parse',
                data:arr
            }).then(function success(response) {
                console.log("parsetext",response.data);
                return response.data;
            },function error(err) {
                console.log(err);
            });
        }
    }


}]);
