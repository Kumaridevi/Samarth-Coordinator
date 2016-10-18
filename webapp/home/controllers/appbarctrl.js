angular.module("samarth-coordinator")
    .controller("appbarctrl", ['$rootScope',
        '$http',
        '$state',
        '$window',
        '$mdSidenav',
        '$scope',
        '$timeout',
        'signinfactory',
        function($rootScope, $http, $state, $window, $mdSidenav,
            $scope, $timeout, signinfactory) {

            var originatorEv;

            $scope.showmenu = false;

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

            $scope.showsidemenu = function() {
                if (signinfactory.getUser() == undefined) {
                    $scope.showmenu = false;
                } else {
                    $scope.showmenu = true;
                }
            }

            $scope.showsidemenu();

            $scope.sidenavcontents = function() {

                    var user = signinfactory.getUser();

                    $scope.usersidenavdata = user;
                    // $log.info(user.data);


                } // sidenavcontents ends

            $timeout($scope.sidenavcontents, 3000);


        }
    ]); // appbarctrl ends
