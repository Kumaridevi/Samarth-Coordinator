var request = require('request');
var platformURL = "localhost:8081";

var getUserAuthToken = function(user) {
    return new Promise(function(resolve, reject) {
        var options = {
            method: 'POST',
            json: true,
            url: 'http://' + platformURL + '/details/getcoordinator/', //check 
            form: {
                email: user.email,
                ct: '@TODO-samarth-coordinator-webapp-token'
            }
        };

        request(options, function(err, res, body) {
            if (err || res === undefined || res.statusCode === undefined) {
                console.error("Error in authorizing coordinator ", err);
                reject({
                    error: err
                });
            } else if (res.statusCode >= 200 && res.statusCode <= 299) {
                console.log("Successfully authorized coordinator ", body);
                resolve(body);
            }
        });
    });
}

module.exports = {
    "getUserAuthToken": getUserAuthToken
};
