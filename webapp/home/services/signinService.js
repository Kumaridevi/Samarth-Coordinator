angular.module("samarth-coordinator")
    .service('signinService', function() {

        var MyText = {};

        return {
            gettxt: function() {
                return MyText;
            },
            settxt: function(value) {
                MyText = value;
            }
        };

    }); // MyText ends
