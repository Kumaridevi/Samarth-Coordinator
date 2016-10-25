var UserModel = require("./usermodel");
var configure = require("./config");
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var apiRoutes = require('express').Router();
var authByToken = require("./authbytoken");

// var login = mongoose.model('login', UserModel.login);
var sidenavcontent = mongoose.model('sidenavcontent', UserModel.sidenavcontent);

//Effective url /auth/user/
apiRoutes.post('/user/', function(req, res) {

    if (!req.body.email || !req.body.pwd) {
        res.json({
            error: "Please try with valid credentials..!"
        });
        return;
    }

    try {

        authByToken.signin(req.body.email, req.body.pwd,
            function(err, user, jwtToken) {
                if (err) {
                    return res.status(500).json({
                        error: "Internal error in processing request, please retry later..!"
                    });
                }

                if (!jwtToken) {
                    console.error("Empty token generated...!");
                    res.status(403).json({
                        error: "Internal error in processing request, please retry later..!"
                    });
                }

                user['token'] = jwtToken;
                return res.status(200).json(user);
            },
            function(err) {
                return res.status(403).json(err);
            });
    } catch (err) {
        console.error("Error in signin ", err);
        return res.status(500).json({
            error: "Internal error in processing request, please retry later..!"
        });
    }

}); // signin post ends

//Effective url /auth/role/:role
apiRoutes.get('/role/:role', function(req, res) {

    if (!req.params.role) {
        res.json({
            error: "Not a valid role..!"
        });
        return;
    }

    // get sidenavcontents based on the user's role
    sidenavcontent.findOne({
        // email: req.params.email
        role: req.params.role
    }, function(err, contents) {

        if (err) throw err;

        if (!contents) {
            res.json({ success: false, message: 'Functionality for given role not found.' });
        } else {

            console.log(contents);
            res.json(contents);
        }

    });
}); // get sidenav ends

//Effective url /auth/signout/
apiRoutes.get('/signout/', function(req, res) {
    res.json({ message: 'Signing out...' });

});

// apiRoutes.get('/', function(req, res) {
//     res.json({ message: 'Welcome to the coolest API on earth!' });
// });

module.exports = apiRoutes;



// // find the user
// login.findOne({
//     // email: req.params.email
//     email: req.body.email,
//     password: req.body.pwd
// }, function(err, user) {

//     if (err) throw err;

//     if (!user) {
//         res.json({ success: false, message: 'Authentication failed. User not found.' });
//         // } else if (!user.validPassword(req.body.pwd)) {
//         //     res.json({ success: false, message: 'Invalid password.' });
//     } else {


//         // if user is found and password is right, create a token
//         var token = jwt.sign(user, configure.secret, {
//             // expiresInMinutes: 1440 // expires in 24 hours
//         });

//         // console.log("Token generated: ", token);
//         user['token'] = "token";

//         res.json(user);
//     }

// });
