angular.module('samarth-coordinator')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('index.searchjob', {
                    url: '/JobSearch',
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
                    }
                })
                .state('index.searchjob.results', {
                    url: 'joblist',
                    views: {
                        "results@": {
                            templateUrl: 'jobsearch/templates/jobsearchresult.html'
                        }
                    }
                })
        }
    ]);
