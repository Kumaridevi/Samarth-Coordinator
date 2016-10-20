angular.module('samarth-coordinator')
    .controller('jobSearchCtrl', ['$scope', 'jobSearchService', function($scope, jobSearchService) {
        $scope.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }

        $scope.searchJob = function() {
            console.log("Search text: " + $scope.searchText);
            jobSearchService.jobResult($scope.searchText)
                .then(function successCallback(response) {
                        console.log("Search result: " + JSON.stringify(response.data));
                        $scope.jobs = response.data;
                        $scope.message = "";
                    },
                    function errorCallback(response) {
                        console.log("some error occured");
                        $scope.message = "Some error occured";
                    });
        };

    }]);
