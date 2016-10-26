angular.module('samarth-coordinator')
.service('registrationservice',function($http) {


    return {

        registercandidate : function (newcandidate) {
            return $http({
                method:'post',
                url:'http://localhost:8081/candidate',
                data:newcandidate
            }).then(function success(response) {
                // console.log("from service",response)
                return response;
            });
        }

    }
});



angular.module('samarth-coordinator')
.service('professionservice',function($http) {


    return {
        getProfession : function() {
            return $http({
                method:'get',
                url:'http://localhost:8081/candidate/professions'
            }).then(function success(professions) {
                console.log("",professions);
                return professions;
            });
        }
        
    }
});
