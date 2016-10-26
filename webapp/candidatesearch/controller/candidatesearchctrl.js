angular.module('samarth-coordinator')
.controller('candidatesearchctrl',['$scope','$parse','candidateservice','parseservice'
	,function($scope,$parse,candidateservice,parseservice) {

		$scope.openMenu = function($mdOpenMenu,ev) {
			$mdOpenMenu(ev);
		}

		$scope.search = function(text) {
			
			var arr = text.split(/[ ,]+/);

			console.log(arr);

			parseservice.parsetext(arr).then(function (results) {
				$scope.message = results;
			},function err(err) {
				$scope.message = err;
			});

			// candidateservice.getcandidatedata().then(function (result) {
			// 	$scope.results = result;
			// 	console.log("ctrl",$scope.results);
			// });
		}

	}]);