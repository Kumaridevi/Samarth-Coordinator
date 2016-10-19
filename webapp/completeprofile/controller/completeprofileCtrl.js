angular.module('samarth-coordinator')
    .controller('completeprofileCtrl', ['$scope', '$stateParams', '$mdDialog', 'candidateprofileservice', function($scope,
        $stateParams, $mdDialog, candidateprofileservice) {

        $scope.id = $stateParams.candidateid;
        console.log($scope.id);

        //get the verification status from the api.
        candidateprofileservice.getverificationdata($scope.id)
            .then(function(response) {
                console.log("cpCtrlinside", response.data[0]);
                $scope.rat = response.data[0].verification_ratings;
                $scope.bad = response.data[0].verification_status;
            }, function(err) {
                console.log(err);
            });


        $scope.showdialog = function(env) {
            $mdDialog.show({
                locals: { id: $scope.id, rat: $scope.rat, bad: $scope.bad },
                templateUrl: 'completeprofile/templates/newtemplate.html',
                controller: 'ListCtrl',
                clickoutsidetoclose: true,
                targetEvent: env
            }).then(function(obj) {
                //console.log("from dialog", answer);
                // $scope.name = answer;
                // $scope.id = id;
                $scope.rat = obj.x;
                $scope.bad = obj.y;

                console.log("showdi", obj.x);
                console.log("showdi", obj.y);

                //console.log("from dialog outcome", $scope.name);
            }, function() {
                //$scope.name = 1;
            });
        }




    }])
    .controller('ListCtrl', function($scope, id, rat, bad, $mdDialog, candidateprofileservice) {

        //console.log("ListCtrl", id);
        $scope.rat = rat;
        $scope.id = id;
        $scope.bad = bad;
        console.log(rat);
        console.log(id);
        console.log(bad);
        $scope.answer = function(b, id) {


            console.log("inside ListCtrl" + b);
            console.log("inside ListCtrl" + id);

            //check the value of b and decide the verification_status
            if (b == 4) {
                $scope.bad = "verified_user";
            }
            if (b < 4 && b > 0) {
                $scope.bad = "error";
            }
            if (b == 0) {
                $scope.bad = "fiber_new";
            }

            var newobj = {
                candidateid: $scope.id,
                verification_status: $scope.bad,
                verification_ratings: b
            }

            candidateprofileservice.updateverificationdata(newobj).
            then(function(res) {
                console.log("successfully updated the data");
            }, function(err) {
                console.log(err);
            });
            //give a api call to update the verification

            var obj = {
                x: b,
                y: $scope.bad
            }

            $mdDialog.hide(obj);
        }



    });
