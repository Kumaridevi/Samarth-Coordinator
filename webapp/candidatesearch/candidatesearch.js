angular.module('samarth-coordinator')
.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('candidatessearch', {
            url: '/candidatessearch',
            views: {
                "appbar": {
                    templateUrl: 'home/templates/appbar.html',
                    controller: 'appbarctrl'
                },
                "content@": {
                    templateUrl: 'candidatesearch/templates/candidatesearchhome.html',
                    controller: 'candidatesearchctrl'
                },
                "footer": {
                    templateUrl: 'home/templates/footer.html',
                }
            }
        })
        .state('candidatessearch.results', {
            url: '/searchlist',
            views: {
                "results": {
                    templateUrl: 'candidatesearch/templates/candidatesearchresults.html',
                    controller: 'candidatesearchctrl'
                }
            }
        });
    }
    ]);
