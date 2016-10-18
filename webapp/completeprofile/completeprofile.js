angular.module('samarth-coordinator') 
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider,$stateParams) {
		$stateProvider
		.state('verifyprofile', {
			url:'/verifyprofile/:candidateid',
			views: {
				"main":{
					templateUrl:'completeprofile/templates/completeprofile.html',
					controller: 'completeprofilectrl'
				}
			}
		})
		.state('back', {
			url:'/viewprofile/:candidateid',
			views: {
				"main":{
					templateUrl:'completeprofile/templates/completeprofileview.html',
					controller: 'completeprofilectrl'
				}
			}
		});
		
	}]);