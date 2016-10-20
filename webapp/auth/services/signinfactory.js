angular.module("samarth-coordinator")
    .factory('signinfactory', ['$http', '$q', '$window', function($http, $q, $window) {

        var signinFactory = {};

        //if the user successfully signs in, save his details to local storage
        signinFactory.saveUser = function(user) {
            if (user !== undefined) {
                if (user.email) {
                    //@TODO Encrypt the data
                    $window.localStorage['member-user'] = JSON.stringify(user);
                } else {
                    console.log("Invalid user data for auth: ", user);
                    signinFactory.removeUser();
                }
            } else {
                console.log("Undefined user data for auth: ", user);
                signinFactory.removeUser();
            }
        };

        //Called when user signs out or user state has to be destroyed
        signinFactory.removeUser = function() {
            $window.localStorage.removeItem('member-user');
        };

        //to get the user details from the local storage
        signinFactory.getUser = function() {
            var u = $window.localStorage['member-user'];
            if (u !== undefined)
                u = JSON.parse(u);
            return u;
        };

        signinFactory.getGuest = function() {
            var guest = {};
            return guest;
        };

        //to check if the user is signed in user or not
        signinFactory.isMember = function() {
            var user = signinFactory.getUser();
            if (user === undefined) {
                return false;
            } else {
                return true;
            }
        };

        //to get the current user, which returned either a valid user object or a guest depending on signin state of the user 
        signinFactory.getCurrentUser = function() {
            if (signinFactory.isMember()) {
                return signinFactory.getUser();
            } else {
                return signinFactory.getGuest();
            }
        };

        // sign in the user with the details provided by him
        signinFactory.signin = function(usrname, pwd) {
            var userinfo = {
                email: usrname,
                pwd: pwd
            };

            return $q(function(resolve, reject) {
                $http.post('/api/User/', userinfo)
                    .then(function(res) {
                            //success
                            if (res.status >= 400) {
                                //can be unauthorized and hence error
                                signinFactory.removeUser(); //ensuring user is not saved locally
                                reject(res.data);
                            } else if (res.status >= 200 && res.status <= 299) {
                                //Check if the required data is returned by the server
                                if (res.data.email) {
                                    //Successfully authenticated
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
                            //If HTTP Request returned with 500 state or some other network error
                            reject(res.data);
                        }
                    );
            });
        };

        // signout the user when he clicks on sign-out
        signinFactory.signout = function() {
            //Immediately invalidate the user state by removing the user object from the local storage
            signinFactory.removeUser();
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
