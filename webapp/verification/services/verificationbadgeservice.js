angular.module('samarth-webcomponents')
    .service('verificationbadgeservice', ['$http', function($http) {


        return {
            getbadgedata: function(candidateid) {
                return $http.get('/verification/' + candidateid);
            }
        }
        // return {
        //     getverificationdata: function(candidateid) {



        //     }
        // }


    }]);
