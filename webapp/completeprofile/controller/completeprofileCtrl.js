angular.module('samarth-coordinator')
.controller('completeprofilectrl',['$scope','$stateParams','$mdDialog',function($scope,$stateParams,$mdDialog) {
	
	$scope.id=$stateParams.candidateid;



	$scope.showdialog = function(env) {
		$mdDialog.show({
			locals: { id: $scope.id },
			templateUrl: 'completeprofile/templates/newtemplate.html',
			controller: 'ListCtrl',
			clickoutsidetoclose: true,
			targetEvent: env
		}).then(function(id) {
			//console.log("from dialog", answer);
			// $scope.name = answer;
			$scope.id = id;

			//console.log("from dialog outcome", $scope.name);
		}, function() {
			//$scope.name = 1;
		});
	}


}])
.controller('ListCtrl', function($scope,id, $mdDialog) {

	//console.log("ListCtrl", id);
	$scope.listid = id;
	$scope.answer = function(b,id) {

		$mdDialog.hide(id);
	}



});



