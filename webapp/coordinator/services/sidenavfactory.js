angular.module("samarth-coordinator")
    .factory('sidenavfactory', ['$http', '$q', function($http, $q) {

        var sidenavfactory = {};

        sidenavfactory.loadSidenav = function(role) {
            // alert(role);
            return $q(function(resolve, reject) {
                $http
                    .get('/auth/role/' + role)
                    .then(function(res) {
                        //success
                        // alert(JSON.stringify(res));
                        // resolve("Contents fetched successfully..!");
                        resolve(res.data);
                    }, function(res) {
                        //error
                        reject(res.data);
                    });
            });
        };

        return sidenavfactory;

    }]); //sidenavfactory ends
