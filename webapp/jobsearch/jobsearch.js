angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('searchjob', {
                    url: '/JobSearch',
                    views: {
                        "appbar": {
                            templateUrl: 'home/templates/appbar.html',
                            controller: 'Navbarcontroller'
                        },
                        "content@": {
                            templateUrl: 'jobsearch/templates/jobsearchhome.html',
                            controller: 'jobSearchCtrl'
                        },
                        "footer": {
                            templateUrl: 'home/templates/footer.html',
                        }
                    }
                })
                .state('searchjob.results', {
                    url: 'joblist',
                    views: {
                        "results": {
                            templateUrl: 'jobsearch/templates/jobsearchresult.html'
                        }
                    }
                })
        }
    ]);
