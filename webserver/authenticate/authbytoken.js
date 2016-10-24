var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var UserModel = require("./usermodel");
var authUser = require("./authuser");

var login = mongoose.model('login', UserModel.login);

var signin = function(email, pwd, callback, unauthCB) {
    login.findOne({
            email: email,
            password: pwd
        },
        function(err, user) {
            if (err) {
                console.error("Database error in finding user, error: ", err);
                callback({
                    error: "Failed to process request, please try later..!"
                }, null)
                return;
            }

            if (!user) {
                console.error('User ', email, ' not found..!');
                unauthCB({
                    error: "Invalid credentials...!"
                }, null);
                return;
            }

            // if (!user.validPassword(pwd)) {
            //     unauthCB({
            //         error: "Invalid credentials...!"
            //     });
            //     return;
            // }

            //Now that user is authenticated locally, fetch the corresponding candidate token
            authUser.getUserAuthToken(user).then(
                function(details) {
                    console.log("inside getUserAuthToken", details);
                    var sessionUser = {
                        "email": user.email,
                        "cid": details.coordinator.coordinatorId,
                        "name": details.coordinator.coordinatorName,
                        "gender": details.coordinator.coordinatorGender,
                        "location": details.coordinator.coordinatorLocation,
                        "role": details.coordinator.coordinatorRole,
                        "sm-token": "TBD"
                    };

                    console.log("Got token successfully ", sessionUser);

                    generateJWTToken(sessionUser, callback); //generate JWTToken
                },
                function(err) {
                    callback(err);
                }
            ); //end of Auth Token of candidate            
        }); //end of user find query
}; //end of signin

var generateJWTToken = function(user, cb) {
    var payload = user;
    var secretOrPrivateKey = 'SAMARTH-WEBAPP-SECRET';
    var options = {
        algorithm: "HS256",
        expiresIn: 36000,
        issuer: user.email
    };

    jwt.sign(payload, secretOrPrivateKey, options, function(err, jwtToken) {
        console.log("Sending token ", user, jwtToken);
        cb(err, user, jwtToken);
    });
}

module.exports = {
    "signin": signin
};
