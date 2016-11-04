angular.module('samarth-webcomponents')
    .service('verificationbadgeservice', ['$http', function($http) {


        return {
            getbadgedata: function(candidateid) {
                return $http.get('http://localhost:8081/verification/' + candidateid);
            }
        }
        // return {
        //     getverificationdata: function(candidateid) {



        //     }
        // }


    }]);
