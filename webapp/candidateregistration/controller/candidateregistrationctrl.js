angular.module('samarth-coordinator').controller('candidateregistrationctrl', ['$scope',
	'registrationservice',
	'$state',
	'professionservice',
	function($scope, registrationservice, $state, professionservice) {

		console.log("Inside candidate register ");


		professionservice.getProfession().then(function(professions) {
			$scope.profession = professions.data;
			console.log($scope.profession);
		}),
		function(err) {
			console.log("Cannot get the professions", err);
		};


		$scope.signup = function() {
			console.log($scope.user);
			registrationservice.registercandidate($scope.user).then(function(response) {
                // console.log(response);
                $state.go("verifyprofile", { candidateid: $scope.user.mobile });
                $scope.signUpStatus = "Candidate Registered successfully";
                console.log($scope.signUpstatus);
            }, function(err) {
            	$scope.error = "Server Error..Please try again later..";
            });
		}

	}
	]);

