angular.module("samarth-coordinator")
    .controller('jobEditCtrl', ['$scope', 'jobProfileService', '$stateParams', '$mdDialog', '$state', function($scope, jobProfileService, $stateParams, $mdDialog, $state) {
        $scope.updateButtonShow = true;
        $scope.postButtonShow = false;
        $scope.editDisabled = true;
        $scope.minDate = new Date();
        $scope.company = [];
        //var id = $stateParams.jobID;
        jobProfileService.getJobDetails($stateParams.jobID, $stateParams.employerID)
            .then(function successCallback(response) {
                    //console.log("Connected successfully" + JSON.stringify(response.data));
                    var job = response.data;
                    $scope.job = job[0];
                    $scope.job.jobLastDate = new Date(Date.parse(job[0].jobLastDate));
                    $scope.company = $scope.job.employer;
                    //console.log("ID" + $scope.job.jobID);
                },
                function errorCallback(response) {
                    console.log("some error occured");
                });
        $scope.addNewSkill = function(ev) {
            $mdDialog.show({
                    controller: addNewSkillController,
                    templateUrl: 'jobprofile/templates/addskillform.html',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: true
                })
                .then(function(skill) {
                    if (skill != null) {
                        $scope.job.skillsRequired.push(skill);
                    }
                }, function() {
                    console.log("nothing to add");
                });
        };

        function addNewSkillController($scope, $mdDialog) {
            $scope.addNew = function() {
                $mdDialog.hide($scope.newSkill);
            };
            $scope.cancel = function() {
                //console.log("nothing to add");
                $mdDialog.hide();
            };
        }
        $scope.addNewEducationDetails = function(ev) {
            $mdDialog.show({
                    controller: addNewEducationController,
                    templateUrl: 'jobprofile/templates/addeducationdetails.html',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: true
                })
                .then(function(newEducation) {
                    if (newEducation != null) {
                        $scope.job.educationRequired.push(newEducation);
                    }
                }, function() {
                    console.log("nothing to add");
                });
        };

        function addNewEducationController($scope, $mdDialog) {
            $scope.addNew = function() {
                $mdDialog.hide($scope.newEducation);
            };
            $scope.cancel = function() {
                //console.log("nothing to add");
                $mdDialog.hide();
            };
        }
        $scope.addNewCertification = function(ev) {
            $mdDialog.show({
                    controller: addNewCertificationController,
                    templateUrl: 'jobprofile/templates/addcertification.html',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: true
                })
                .then(function(newCertificationName) {
                    if (newCertificationName != null) {
                        $scope.job.certificationRequired.push(newCertificationName);
                    }
                }, function() {});
        };

        function addNewCertificationController($scope, $mdDialog) {
            $scope.addNew = function() {
                $mdDialog.hide($scope.newCertificationName);
            };
            $scope.cancel = function() {
                //console.log("nothing to add");
                $mdDialog.hide();
            };
        }
        $scope.removeCertification = function(name) {
            var arr = $scope.job.certificationRequired;
            var len = arr.length;
            for (i = 0; i < len; i++) {
                if ($scope.job.certificationRequired[i] == name) {
                    $scope.job.certificationRequired.splice(i, i);
                }
            }
        }
        $scope.addContactDetails = function(ev) {
            $mdDialog.show({
                    controller: addNewContactController,
                    templateUrl: 'jobprofile/templates/addcontactdetails.html',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false
                })
                .then(function(newContact) {
                    if (newContact != null) {
                        //console.log("inside function");
                        $scope.job.contactDetails.push(newContact);
                    }
                }, function() {});
        };

        function addNewContactController($scope, $mdDialog) {
            $scope.addNew = function() {
                //console.log("inside add");
                $mdDialog.hide($scope.newContact);
            };
            $scope.cancel = function() {
                //console.log("nothing to add");
                $mdDialog.hide();
            };
        }
        $scope.updateJob = function() {
            console.log("Inside edit button function");
            jobProfileService.updateJob($scope.job)
                .then(function successCallback(response) {
                        $scope.message = "The job is updated successfully.. !!";
                        var confirm = $mdDialog.confirm()
                            .title('The job is updated successfully.. !!')
                            //.targetEvent(ev)
                            .ok('View')
                            .fullscreen(false)
                        $mdDialog.show(confirm)
                            .then(function() {
                                $state.go("index.jobProfileView", { "jobID": $scope.job.jobID, "employerID": $scope.job.employer.employerID });
                            }, function() {});
                    },
                    function errorCallback(response) {
                        //console.log("some error occured");
                        $scope.message = "Some error occured";
                    });
        }
    }]);
