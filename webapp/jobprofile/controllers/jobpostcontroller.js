angular.module("samarth-coordinator")
    .controller('jobPostCtrl', ['$scope', '$mdDialog', 'jobProfileService', '$q', '$state', function($scope, $mdDialog, jobProfileService, $q, $state) {
        $scope.job = {};
        $scope.updateButtonShow = false;
        $scope.postButtonShow = true;
        $scope.editDisabled = false;
        $scope.job.skillsRequired = [];
        $scope.job.educationRequired = [];
        $scope.job.certificationRequired = [];
        $scope.job.contactDetails = [];
        $scope.availableShow = false;
        $scope.job.employer = {};
        $scope.job.employer.employerName = "";
        $scope.minDate = new Date();
        $scope.checkAvailabilitilty = function() {
            jobProfileService.checkAvailablity($scope.job.jobID, $scope.job.employer.employerID)
                .then(function successCallback(response) {
                        if (response.data != 0) {
                            $scope.availableShow = false;
                            $scope.notAvailableShow = true;
                        } else {
                            $scope.availableShow = true;
                            $scope.notAvailableShow = false;
                        }
                    },
                    function errorCallback(response) {
                        //console.log("some error occured");
                        $scope.checkMessage = "Some error occured on checking the availability";
                    });
        }
        $scope.addNewSkill = function(ev) {
            $mdDialog.show({
                    controller: addNewSkillController,
                    templateUrl: 'jobprofile/templates/addskillform.html',
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false
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
                    fullscreen: false
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
                    fullscreen: false
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
        $scope.postJob = function() {
            /*if ($scope.jobPosting.$error) {
    $scope.message = "Enter the details correctly. and try again"
}
*/
            $scope.job.jobPostDate = new Date();
            $scope.job.jobStatus = "Open";
            $scope.job.jobVerification = "Not Verified";
            jobProfileService.postJob($scope.job)
                .then(function successCallback(response) {
                        $scope.message = "The job is posted successfully.. !!";
                        var confirm = $mdDialog.confirm()
                            .title('The job is posted successfully.. !!')
                            //.targetEvent(ev)
                            .ok('View')
                            .fullscreen(false)
                            .cancel('One more Entry ?!');
                        $mdDialog.show(confirm)
                            .then(function() {
                                $state.go("index.jobProfileView", { "jobID": $scope.job.jobID, "employerID": $scope.job.employer.employerID });
                            }, function() {
                                $scope.job = {};
                                $scope.visibleShow = false;
                            });
                    },
                    function errorCallback(response) {
                        //      console.log("some error occured");
                        $scope.message = response.data;
                    });
        }


        /*Auto complete*/
        $scope.company = null;
        $scope.searchCompany = null;
        $scope.initialise = loadAllCompanies()
        $scope.companies = [];
        $scope.Querycompanies = queryList;

        function queryList(search) {
            //console.log("Array : " + JSON.stringify($scope.companies));
            var results = search ? $scope.companies.filter(createFilterFor(search)) : $scope.companies,
                deferred;

            return results;
        }
        /*Filter for search */
        function createFilterFor(query) {
            return function filterFn(company) {
                return (company.employerName.indexOf(query) === 0);
            };
        }
        /*Load all companies details*/
        function loadAllCompanies() {
            jobProfileService.getAllCompanies()
                .then(function successCallback(response) {
                        $scope.companies = response.data;
                    },
                    function errorCallback(response) {
                        console.log("some error occured");
                    });
        };
        $scope.selectedCompany = function(employer) {
            //console.log("Company selected : " + employer);
            $scope.job.employer.employerName = employer.employerName;
            $scope.job.employer.aboutEmployer = employer.aboutEmployer;
            $scope.job.employer.employerLogo = employer.employerLogo;
            $scope.job.employer.employerID = employer.employerID;
        }
    }]);
