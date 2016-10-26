angular.module('samarth-coordinator')
    .controller('jobSearchCtrl', ['$scope', 'jobSearchService', 'Pagination', function($scope, jobSearchService, Pagination) {
        $scope.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }
        $scope.pagination = Pagination.getNew(1);
        $scope.searchJob = function() {
            //console.log("Search text: " + $scope.searchText);
            jobSearchService.jobResult($scope.searchText)
                .then(function successCallback(response) {
                        //console.log("Search result: " + JSON.stringify(response.data));
                        $scope.jobs = response.data;
                        $scope.pagination.numPages = Math.ceil(response.data.length / $scope.pagination.perPage);
                        $scope.message = "";
                        if (response.data.length == 0) {
                            $scope.message = "Sorry.. ! No result found";
                        }
                    },
                    function errorCallback(response) {
                        console.log("some error occured");
                        $scope.message = "Some error occured";
                    });
        };

    }]);
