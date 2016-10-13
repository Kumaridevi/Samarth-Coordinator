angular.module('samarth-coordinator')
.controller('candidatesearchctrl',['$scope','candidateservice',function($scope,candidateservice) {

	$scope.openMenu = function($mdOpenMenu,ev) {
		$mdOpenMenu(ev);
	}

	candidateservice.getcandidatedata().then(function (result) {
		$scope.results = result;
		console.log("from ctrl");
		console.log($scope.results);
	});

}]);