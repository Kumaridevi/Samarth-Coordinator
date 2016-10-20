angular.module('samarth-coordinator')
.controller('candidatesearchctrl',['$scope','candidateservice'
	,function($scope,candidateservice) {

		$scope.openMenu = function($mdOpenMenu,ev) {
			$mdOpenMenu(ev);
		}

		$scope.search = function() {
			candidateservice.getcandidatedata().then(function (result) {
				$scope.results = result;
				console.log("ctrl",$scope.results);
			});
		}

	}]);