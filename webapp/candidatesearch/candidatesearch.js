angular.module('samarth-coordinator') 
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
		
		$stateProvider
		.state('candidatessearch', {
			url:'/candidatessearch',
			views: {
				"main":{
					templateUrl:'candidatesearch/templates/candidatesearchhome.html',
					controller: 'candidatesearchctrl'
				}
			}
		})
		.state('candidatessearch.results',{
			url:'searchlist',
			views:{
				"results":{
					templateUrl:'candidatesearch/templates/candidatesearchresults.html',
					controller: 'candidatesearchctrl'
				}
			}
		})
		.state('registercandidate',{
			url:'candidateregistration',
			views:{
				"registercandidate":{
					templateUrl:'candidatesearch/templates/candidateregistration.html',
					controller:'candidateregistrationctrl'
				}
			}
		});
	}]);