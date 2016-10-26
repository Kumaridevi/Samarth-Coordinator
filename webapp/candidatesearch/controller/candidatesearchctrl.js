angular.module('samarth-coordinator')
    .controller('candidatesearchctrl', ['$scope', '$parse', 'candidateservice', 'Pagination', function($scope, $parse, candidateservice, Pagination) {
        $scope.pagination = Pagination.getNew(1);

        $scope.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }

        $scope.bairava = $parse($scope.searchtext);

        $scope.search = function() {
            candidateservice.getcandidatedata().then(function(result) {
                $scope.results = result;
                console.log("ctrl", $scope.results);
                $scope.pagination.numPages = Math.ceil(result.length / $scope.pagination.perPage);
            });
        }



    }]);
