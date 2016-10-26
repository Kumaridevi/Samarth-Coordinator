angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('index.searchjob', {
                    url: '/JobSearch/:circleName/:circleDomain',
                    views: {
                        "appbar@": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'appbarctrl'
                        },
                        "content@": {
                            templateUrl: 'jobsearch/templates/jobsearchhome.html',
                            controller: 'jobSearchCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    },
                    resolve: {
                        circleName: ['$stateParams', function($stateParams) {
                            return $stateParams.circleName;
                        }],
                        circleDomain: ['$stateParams', function($stateParams) {
                            return $stateParams.circleDomain;
                        }]
                    }
                })
                .state('index.searchjob.results', {
                    url: 'joblist',
                    views: {
                        "results@": {
                            templateUrl: 'jobsearch/templates/jobsearchresult.html',
                            //controller: 'jobSearchCtrl'
                        }
                    }
                })
        }
    ]);
