angular.module('samarth-coordinator')
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

	$stateProvider
	.state('registercandidate', {
		url: '/candidateregistration',
		views: {
			"appbar": {
				templateUrl: 'home/templates/appbar.html',
				controller: 'Navbarcontroller'
			},
			"content@": {
				templateUrl: 'candidateregistration/templates/candidateregistration.html',
				controller: 'candidateregistrationctrl'
			},
			"footer": {
				templateUrl: 'home/templates/footer.html',
			}
		}
	});
}]);