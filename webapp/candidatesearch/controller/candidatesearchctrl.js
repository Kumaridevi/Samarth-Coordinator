angular.module('samarth-coordinator')
.controller('candidatesearchctrl',['$scope','$parse','candidateservice','parseservice','Pagination'
	,function($scope,$parse,candidateservice,parseservice,Pagination) {

		$scope.openMenu = function($mdOpenMenu,ev) {
			$mdOpenMenu(ev);
		}
		$scope.pagination=Pagination.getNew(3);
		$scope.search = function(text) {
			
			var arr = text.split(/[ ,]+/);


			parseservice.parsetext(arr).then(function (results) {
				
				$scope.results = results;
				console.log($scope.results.length);
				$scope.pagination.numPages = Math.ceil(results.length / $scope.pagination.perPage);
			},function err(err) {
				$scope.message = err;
			});

			
		}

	}]);