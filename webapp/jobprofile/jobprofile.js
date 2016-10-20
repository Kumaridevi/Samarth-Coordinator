angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('postjob', {
                    url: '/postjob',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'Navbarcontroller'
                        },
                        "content@": {
                            templateUrl: 'jobprofile/templates/jobprofilepost.html',
                            controller: 'jobPostCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    }
                })
                .state('jobProfileView', {
                    url: '/jobProfileView/:jobID/:employerID',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'Navbarcontroller'
                        },
                        "content@": {
                            templateUrl: 'jobprofile/templates/jobprofileview.html',
                            controller: 'jobProfileCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    },
                    resolve: {
                        jobID: ['$stateParams', function($stateParams) {
                            console.log('ID: ' + $stateParams.jobID);
                            return $stateParams.jobID;
                        }],
                        employerID: ['$stateParams', function($stateParams) {
                            console.log('companyName: ' + $stateParams.employerID);
                            return $stateParams.employerID;
                        }]
                    }
                })
                .state('editJob', {
                    url: '/editJob/:jobID/:employerID',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'Navbarcontroller'
                        },
                        "content@": {
                            templateUrl: 'jobprofile/templates/jobprofilepost.html',
                            controller: 'jobEditCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    },
                    resolve: {
                        jobID: ['$stateParams', function($stateParams) {
                            console.log('ID: in edit ' + $stateParams.jobID);
                            return $stateParams.jobID;
                        }],
                        employerID: ['$stateParams', function($stateParams) {
                            console.log('companyName: ' + $stateParams.employerID);
                            return $stateParams.employerID;
                        }]
                    }

                });

        }
    ]);
