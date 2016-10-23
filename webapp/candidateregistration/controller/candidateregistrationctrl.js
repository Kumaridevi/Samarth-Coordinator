angular.module('samarth-coordinator').controller('candidateregistrationctrl',['$scope','registrationservice',
	function($scope,registrationservice) {

		
		$scope.signup = function() {
			console.log($scope.user);
			registrationservice.registercandidate($scope.user).then(function(response) {
				// console.log(response);
				$scope.signUpStatus = "Candidate Registered successfully";
				console.log($scope.signUpstatus);
			},function(err) {
				$scope.error = "Server Error..Please try again later..";
			});
		}
		
	}]);