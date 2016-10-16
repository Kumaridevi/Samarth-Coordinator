angular.module("samarth-coordinator")
    .controller("Navbarcontroller", ['$rootScope', '$http', '$state', '$window', '$mdDialog', '$mdSidenav', '$stateParams',
        '$scope', '$timeout', 'signinFactory',
        function myResponse($rootScope, $http, $state, $window, $mdDialog, $mdSidenav, $stateParams,
            $scope, $timeout, signinFactory) {

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
                if (signinFactory.loginUser() == undefined) {
                    $scope.showmenu = false;
                } else {
                    $scope.showmenu = true;
                }
            }

            $scope.showsidemenu();

            $scope.sidenavcontents = function() {

                    var user = signinFactory.loginUser();
                    $scope.usersidenavdata = user.data;
                    console.log(user.data);
                    // $log.info(user.data);


                } // sidenavcontents ends

            $timeout($scope.sidenavcontents, 3000);


        }
    ]); // appCtrl ends
