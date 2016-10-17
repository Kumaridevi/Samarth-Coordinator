var UserModel = require("./usermodel");
var configure = require("./config");
// var express = require('express');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var apiRoutes = require('express').Router();

var login = mongoose.model('login', UserModel);

apiRoutes.post('/User/', function(req, res) {

    if (!req.body.email || !req.body.pwd) {
        res.json({
            error: "Please try with valid credentials..!"
        });
        return;
    }

    // find the user
    login.findOne({
        // email: req.params.email
        email: req.body.email,
        password: req.body.pwd
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
            // } else if (!user.validPassword(req.body.pwd)) {
            //     res.json({ success: false, message: 'Invalid password.' });
        } else {

            // if user is found and password is right, create a token
            var token = jwt.sign(user, configure.secret, {
                // expiresInMinutes: 1440 // expires in 24 hours
            });

            res.json({
                success: true,
                message: 'Enjoy your token!',
                data: user,
                token: token
            });

        }

    });
}); // post ends

apiRoutes.get('/signout/', function(req, res) {
    res.json({ message: 'Signing out...' });

});

apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

module.exports = apiRoutes;
