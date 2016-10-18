angular.module('samarth-coordinator')
.controller('completeprofilectrl',['$scope','$stateParams',function($scope,$stateParams) {
	
	$scope.id=$stateParams.candidateid;

}]);