angular.module('samarth-webcomponents')
    .service('circlesGetService', function($http, signinfactory) {
        var objcircle = {};
        // var userdata = $window.localStorage["member-user"];
        // console.log(userdata);

        //gets the circle from neo4j and mongo
        objcircle.getCircle = function() {
            var userdata = signinfactory.getUser();
            // console.log("ger citcle", userdata);

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
