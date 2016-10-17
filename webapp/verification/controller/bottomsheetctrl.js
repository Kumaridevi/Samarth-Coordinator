angular.module('samarth-coordinator')
    .controller('VerificationCtrl', function($mdDialog, $scope, $stateParams) {

        $scope.name = $stateParams.outcome;
        console.log($scope.name);
        $scope.id = $stateParams.id;
        console.log($scope.id);

        $scope.obj = [{ id: 1 }, { id: 2 }];


        $scope.clickoutsidetoclose = false;




        $scope.showdialog = function(env) {
            $mdDialog.show({
                locals: { answer: $scope.name, id: $scope.id },
                templateUrl: 'verification/templates/newtemplate.html',
                controller: 'ListCtrl',
                clickoutsidetoclose: true,
                targetEvent: env
            }).then(function(answer, id) {
                console.log("from dialog", answer);
                $scope.name = answer;
                $scope.id = id;

                console.log("from dialog outcome", $scope.name);
            }, function() {
                $scope.name = 1;
            });
        }


    })
    .controller('ListCtrl', function($scope, answer, id, $mdDialog) {

        console.log("ListCtrl", id);
        $scope.listid = id;
        $scope.answer = function(answer, id) {
            $mdDialog.hide(answer, id);
        }


    });
