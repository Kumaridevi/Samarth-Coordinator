angular.module('samarth-coordinator')
    .service('register', ['$http', function($http) {

        return {
            registercoordinator: function(newcoordinator) {
                console.log("from service", newcoordinator);

                return $http.post('http://localhost:8081/coordinatorregister/createcoordinator', newcoordinator);
            }
        }

    }])

.controller('CoordinatorRegisterCtrl', ['$scope', 'register', function($scope, register) {
    $scope.signin = function(coordinator) {
        console.log($scope.coordinator);
        console.log("enter to ctrler");
        register.registercoordinator($scope.coordinator)
            .then(function success(response) {
                console.log("success");
                console.log("from service", response)
                showSuccessAlert("Success" + response.name);
                return response;
            }, function error(error) {
                console.log("Error on inserting data");
            });
    }
}]);
