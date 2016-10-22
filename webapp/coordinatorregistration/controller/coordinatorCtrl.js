angular.module('samarth-coordinator')
    .service('register', ['$http', function($http) {

        return {
            registercoordinator: function(newcoordinator) {
                alert("Registration Successful");
                return $http.post('http://localhost:8081/coordinatorregister/createcoordinator', newcoordinator);
            }
        }

    }])

.controller('CoordinatorRegisterCtrl', ['$scope', 'register', function($scope, register) {
    $scope.signin = function(coordinator) {
        register.registercoordinator($scope.coordinator)
            .then(function success(response) {
                return response;
            }, function error(error) {
                console.log("Error on inserting data");
            });
    }
    $scope.reset = function() {
        var master = {
            name: '',
            email: '',
            mobile: '',
            pwd: '',
            role: ''

        };
        $scope.temp = angular.copy(master);
        $scope.registrationform.$setPristine();
    }
}]);
