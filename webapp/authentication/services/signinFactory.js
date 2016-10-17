angular.module("samarth-coordinator")
    .factory('signinFactory', ['$http', '$q', '$window', function($http, $q, $window) {

        var signinFactory = {};

        signinFactory.saveUser = function(user) {
            // alert(JSON.stringify(user));
            if (user !== undefined) {
                // alert("entered first if");
                if (user.data.email) {

                    // alert("entered 2nd if");
                    $window.localStorage['member-user'] = JSON.stringify(user);
                    // alert("my local storage" + $window.localStorage['member-user']);
                } else {
                    console.log("Invalid user data for auth: ", user);
                    signinFactory.removeUser();
                }
            } else {
                console.log("Undefined user data for auth: ", user);
                signinFactory.removeUser();
            }
        };

        signinFactory.removeUser = function() {
            $window.localStorage.removeItem('member-user');
        };

        signinFactory.loginUser = function() {
            var u = $window.localStorage['member-user'];
            // alert(u);
            if (u !== undefined)
                u = JSON.parse(u);
            return u;
        };

        signinFactory.getGuest = function() {
            var guest = {};
            return guest;
        };


        signinFactory.isMember = function() {
            var user = signinFactory.loginUser();

            if (user === undefined) {
                return false;
            } else {
                return true;
            }
        };


        signinFactory.getCurrentUser = function() {
            if (signinFactory.isMember()) {
                return signinFactory.loginUser();
            } else {
                return signinFactory.getGuest();
            }
        };

        signinFactory.getUser = function(userinfo) {
            // alert(JSON.stringify(userinfo));
            //Returning a promise object
            return $q(function(resolve, reject) {
                $http.post('/api/User/', userinfo)
                    .then(function(res) {
                            // alert("post success email" + email);
                            //success
                            if (res.status >= 400) {
                                //can be unauthorized and hence error
                                signinFactory.removeUser(); //ensuring user is not saved locally
                                reject(res.data);
                            } else if (res.status >= 200 && res.status <= 299) {
                                // alert("success else if");
                                // alert(JSON.stringify(res));
                                if (res.data.data.email && res.data.token) {
                                    //Successfully authenticated
                                    // alert("entered if");
                                    signinFactory.saveUser(res.data);
                                    resolve(signinFactory.getCurrentUser());
                                } else {
                                    //Login request passed but required data was not returned
                                    signinFactory.removeUser();
                                    reject(res.data);
                                }
                            }
                        },
                        function(res) {
                            reject(res.data);
                        }
                    );
            });
        };

        signinFactory.signout = function() {
            signinFactory.removeUser();
            //Returning promise object
            return $q(function(resolve, reject) {
                $http
                    .get('/api/signout/')
                    .then(function(res) {
                        //success
                        resolve("Signed-out successfully..!");
                        // resolve(res.data)
                    }, function(res) {
                        //error
                        reject(res.data);
                    });
            });
        };

        return signinFactory;


    }]); //signinFactory ends
