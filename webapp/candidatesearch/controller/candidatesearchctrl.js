angular.module('samarth-coordinator')
    .controller('candidatesearchctrl', ['$scope',
        '$parse',
        'candidateservice',
        'allcandidateservice',
        'parseservice',
        'Pagination',
        '$stateParams',
        '$state',
        function($scope, $parse, candidateservice, allcandidateservice, parseservice, Pagination, $stateParams, $state) {
            // console.log("Values state : "+$stateParams.circleName+$stateParams.circleDomain);
            $scope.openMenu = function($mdOpenMenu, ev) {
                $mdOpenMenu(ev);
            }


            allcandidateservice.allcandidates().then(function(response) {
                $scope.results = response;
                //console.log("all candidates ctrl",$scope.results[0].candidateid);
                console.log(response);
                $state.go('index.candidatessearch.results');
            }, function(err) {
                $scope.message = err;
                console.log(err);
            });



            if ($stateParams.circleName && $stateParams.circleDomain) {

                candidateservice.getcandidatedata($stateParams.circleName)
                    .then(function(candidates) {
                        $scope.results = candidates;
                        console.log("from ctrl", $scope.results);
                        $state.go('index.candidatessearch.results');
                    }, function(err) {
                        $scope.message = err;
                    })
            }
            $scope.pagination = Pagination.getNew(5);


            $scope.search = function(text) {

                var arr = text.split(/[ ,]+/);
                // if($stateParams.circleName && $stateParams.circleDomain){
                // 	arr.push($stateParams.circleName);	
                // }

                parseservice.parsetext(arr).then(function(results) {

                    $scope.results = results;
                    console.log($scope.results.length);
                    $scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
                }, function err(err) {
                    $scope.message = err;
                });
            }

        }
    ]);
