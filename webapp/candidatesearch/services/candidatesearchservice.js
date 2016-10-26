angular.module('samarth-coordinator').service('candidateservice', ['$http', function($http) {

    return {
        getcandidatedata: function(circle) {
            console.log("Found in circle service",circle);
            return $http({
                method: 'get',
                url: 'http://localhost:8081/skillcard/searchcandidate/'+ circle,
            }).then(function success(response) {
                console.log("from service",response.data);
                return response.data;
            }, function error(err) {
                console.log("error",err);
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


}])



.service('allcandidateservice', ['$http', function($http) {

    return {

        allcandidates: function() {
            return $http({
                method:'get',
                url:'http://localhost:8081/skillcard/allcandidates',
            }).then(function success(response) {
                console.log("all candidates service",response.data.results);
            },function error(err) {
                console.log(err);
            });
        }

    }
}]);
