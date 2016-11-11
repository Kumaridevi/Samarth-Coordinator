var http = require('http');
var express = require('express');
var path = require('path');
let proxy = require('http-proxy');
var favicon = require('serve-favicon');
var morgan = require('morgan');
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var config = require('./webserver/authenticate/config');
var apiauthroute = require('./webserver/authenticate/routes');

// var authRoutes = require('./webserver/auth/authrouter');
// var authByToken = require('./webserver/auth/authbytoken');

//Express App created
let resourcebundle = require('./webserver/resourcebundle/resourcebundlerouter.js');
var app = express();

mongoose.connect('mongodb://localhost:27017/samarthplatformdb');

// Creating proxy object
let platformProxy = proxy.createProxyServer();

app.onAppStart = function(addr) {

    console.log("Samarth-Coordinator web app is now Running on port:", addr.port);

}

app.use(morgan('dev'));
/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));*/
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'webapp')));



// route middleware to verify a token
// apiauthroute.use(function(req, res, next) {

//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];

//     // decode token
//     if (token) {

//         // verifies secret and checks exp
//         jwt.verify(token, config.secret, function(err, decoded) {
//             if (err) {
//                 return res.json({ success: false, message: 'Failed to authenticate token.' });
//             } else {
//                 // if everything is good, save to request for use in other routes
//                 req.decoded = decoded;
//                 next();
//             }
//         });

//     } else {

//         // if there is no token return an error
//         return res.status(403).send({
//             success: false,
//             message: 'No token provided.'
//         });

//     }
// });
app.use('/resource', resourcebundle);
app.use('/auth', apiauthroute);

/* ============================================
=            proxy implementation            =
============================================*/

// The below app route config should be placed after all the local resources have ended
app.use('/', function(req, res) {
    let options = {
        target: {
            host: 'localhost',
            port: 8081
        }
    };
    platformProxy.web(req, res, options);
});

platformProxy.on('error', function(err, req, res) {
    console.error('Error in proxy pass: ', err);
});


/* =====  End of proxy implementation  ======*/

app.use(function(req, res, next) {
    var err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({
        "error": err.message
    });
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        logger.error("Internal error in watch processor: ", err);
        return res.status(err.status || 500).json({
            "error": err.message
        });
    });
}

app.use(function(err, req, res, next) {
    logger.error("Internal error in watch processor: ", err);
    return res.status(err.status || 500).json({
        "error": err.message
    });
});

module.exports = app;
