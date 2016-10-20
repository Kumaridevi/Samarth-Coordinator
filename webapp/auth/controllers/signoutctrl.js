angular.module("samarth-coordinator")
    .controller("signoutctrl", ['$scope',
        '$state',
        '$rootScope',
        'signinfactory',
        function($scope, $state, $rootScope, signinfactory) {
            //this controller is invoked only when user state is transitioned to signout
            //Hence directly signout the moment this state is invoked
            signinfactory.signout()
                .then(function(res) {
                        //redirect the user to sign-in page
                        $state.go("index");
                        $rootScope.showmenu = false;
                    },
                    function(err) {
                        $state.go("index");
                    });
        }
    ]);
