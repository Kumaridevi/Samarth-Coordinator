angular.module('samarth-coordinator') 
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
		
		$stateProvider
		.state('candidatessearch', {
			url:'/candidatessearch',
			views: {
				"main":{
					templateUrl:'candidatesearch/templates/candidatesearchhome.html',
					controller: 'candidatesearchcontroller'
				}
			}
		})
		.state('candidatessearch.results',{
			url:'searchlist',
			views:{
				"results":{
					templateUrl:'candidatesearch/templates/candidatesearchresults.html',
				}
			}
		});
	}]);