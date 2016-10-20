angular.module("samarth-coordinator")
    .controller("crdtrdashboardctrl", ['$scope', '$mdDialog', '$log', 'circlesGetService',
        function($scope, $mdDialog, $log, circlesGetService) {
            circlesGetService.getCircle()
                .then(function(response) {
                    $scope.profiling = response.data;
                    //   $log.info(profiling);
                    console.log($scope.profiling);

                }, function(err) {
                    // $log.log(err);
                });
            $scope.showForm = function(ev) {
                $mdDialog.show({
                        templateUrl: 'coordinator/templates/addCircle.html',
                        controller: dialogController,
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: true,
                    })
                    .then(function(circle) {
                        //    console.log(circle);
                        circle.profilePic = "http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/artheader.jpg";
                        //  console.log(circle);
                        circlesGetService.addCircle(circle);
                    }).then(function success(response) {
                        //alert("circle added");
                    }, function(err) {
                        //  $log.log(err);
                    });
            };
        }
    ]);
//adds the circle to neo4j
function dialogController($scope, $mdDialog, circlesGetService) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    }
    $scope.submit = function(circle) {
        console.log(circle);
        $mdDialog.hide(circle);
    }

}
