angular.module('samarth-coordinator')
.controller('candidatesearchctrl',['$scope','$parse','candidateservice'
	,function($scope,$parse,candidateservice) {

		$scope.openMenu = function($mdOpenMenu,ev) {
			$mdOpenMenu(ev);
		}

		$scope.bairava = $parse($scope.searchtext);

		$scope.search = function() {
			candidateservice.getcandidatedata().then(function (result) {
				$scope.results = result;
				console.log("ctrl",$scope.results);
			});
		}

	}]);