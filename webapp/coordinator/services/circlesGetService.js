angular.module('samarth-webcomponents')
    .service('circlesGetService', function($http, signinfactory) {
        var objcircle = {};
        // var userdata = $window.localStorage["member-user"];
        // console.log(userdata);
        var userdata = signinfactory.getUser();
        console.log(userdata.email);

        //gets the circle from neo4j and mongo
        objcircle.getCircle = function() {
            return $http.get('http://localhost:8081/circle/' + userdata.email)
                .then(function(res) {
                    //console.log("got circles data");
                    return res;
                }, function(error) {
                    // console.log(res);
                    return error;
                });
        }

        //adds the circle to mongodb and neo4j
        objcircle.addCircle = function(circle) {
            console.log("service circle", circle);
            return $http({
                    url: "http://localhost:8081/circle/",
                    method: "POST",
                    data: circle
                })
                .then(function(response) {
                        return response;
                    },
                    function(error) {
                        return error;
                    });


        }
        return objcircle;
    });
