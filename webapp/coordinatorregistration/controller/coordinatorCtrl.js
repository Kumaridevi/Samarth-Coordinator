angular.module('samarth-coordinator')
    .service('register', ['$http', function($http) {

        return {
            registercoordinator: function(newcoordinator) {
                return $http.post('http://localhost:8081/coordinatorregister/createcoordinator', newcoordinator);
            }
        }

    }])

.controller('CoordinatorRegisterCtrl', ['$scope', 'register', function($scope, register) {
    $scope.signin = function(coordinator) {
        console.log("from service", coordinator);
        register.registercoordinator($scope.coordinator)
            .then(function success(response) {
                $scope.status = "coordinator registered Successfully";
                return response;
            }, function error(error) {
                console.log("Error on inserting data");
            });
    }


}]);
