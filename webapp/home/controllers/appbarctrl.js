angular.module("samarth-coordinator")
    .controller("appbarctrl", ['$rootScope',
        '$http',
        '$state',
        '$window',
        '$mdSidenav',
        '$scope',
        '$timeout',
        'signinfactory',
        'sidenavfactory',
        function($rootScope, $http, $state, $window, $mdSidenav,
            $scope, $timeout, signinfactory, sidenavfactory) {

            var originatorEv;

            // alert("inside appbarctrl");

            // $scope.showmenu = false;

            this.openMenu = function($mdOpenMenu, ev) {
                originatorEv = ev;
                $mdOpenMenu(ev);
            };

            originatorEv = null;

            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {

                return function() {
                    $mdSidenav(componentId).toggle();
                }
            }

            $scope.sidenavcontents = function() {
                    var user = signinfactory.getUser();
                    if (user == undefined) {
                        $scope.showmenu = false;
                    } else {
                        var role = user.role;
                        sidenavfactory.loadSidenav(role)
                            .then(function(contents) {
                                $scope.sidebarcontents = contents;
                                $rootScope.showmenu = true;
                            }, function(err) {
                                console.log("Error in fetching details: ", err);
                            });
                        // $scope.showmenu = true;
                    }
                } //sidenavcontents ends

            $scope.sidenavcontents();

            // $scope.sidenavcontents = function() {

            //         // var user = signinfactory.getUser();
            //         // alert(user);
            //         // $scope.usersidenavdata = user;
            //         // $log.info(user.data);


            //     } // sidenavcontents ends

            // $timeout($scope.sidenavcontents, 3000);


        }
    ]); // appbarctrl ends
