angular.module('samarth-coordinator').controller('candidateregistrationctrl',['$scope','registrationservice','$state',
	function($scope,registrationservice,$state) {

		console.log("Inside candidate register ");
		$scope.signup = function() {
			console.log($scope.user);
			registrationservice.registercandidate($scope.user).then(function(response) {
				// console.log(response);
				$state.go("verifyprofile",{candidateid: $scope.user.mobile});
				$scope.signUpStatus = "Candidate Registered successfully";
				console.log($scope.signUpstatus);
			},function(err) {
				$scope.error = "Server Error..Please try again later..";
			});
		}
		
	}]);