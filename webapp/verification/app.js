(function() {

    'use strict';

    angular.module('Rubric', ['ngMaterial', 'md.data.table'])
        .controller('HomeCtrl', function($mdDialog, $scope) {

            $scope.message = "Hello World!";
            $scope.data = "Candidate";
            $scope.outcome = 0;

            $scope.clickoutsidetoclose = false;
            console.log($scope.outcome);
            $scope.showdialog = function(env) {
                $mdDialog.show({
                    templateUrl: 'template/newtemplate.html',
                    controller: 'ListCtrl',
                    clickoutsidetoclose: true,
                    targetEvent: env
                }).then(function(answer) {
                    console.log(answer);
                    $scope.outcome = answer;

                }, function() {
                    $scope.outcome = 1;
                });
            }


        })
        .controller('ListCtrl', function($scope, $mdDialog) {
            var a = $scope.$parent.outcome;
            $scope.b = a;
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            }


        });

})();
