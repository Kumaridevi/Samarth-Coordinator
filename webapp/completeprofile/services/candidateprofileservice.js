angular.module('samarth-coordinator')
    .service('candidateprofileservice', ['$http', function($http) {


        return {
            getverificationdata: function(candidateid) {
                return $http.get('http://localhost:8081/verification/' + candidateid);
            },


            updateverificationdata: function(typename, candidatedata) {
                return $http.patch('http://localhost:8081/verification/updateverification/' + typename, candidatedata);
            }

        }
        // return {
        //     getverificationdata: function(candidateid) {



        //     }
        // }


    }]);

/*

candidateid,


*/
