angular.module('samarth-coordinator')
    .factory('userInterceptor', ['$q', '$rootScope', '$window',
        function($q, $rootScope, $window) {
            return {
                'request': function(config) {
                    var u = $window.localStorage['member-user'];
                    if (u !== undefined) {
                        u = JSON.parse(u);
                        config.headers['x-user-access-token'] = u.token;
                        // config.headers['x-access-token'] = u.ptkn;
                        config.headers['x-access-token'] = u.token;
                    }
                    return config;
                },

                'responseError': function(rejection) {
                    if (rejection.status === 401 || rejection.status === 403) {
                        $rootScope.$emit("member-unauthorized");
                    }

                    return $q.reject(rejection);
                }
            };
        }
    ]).config(['$httpProvider',
        function($httpProvider) {
            //Registering a http interceptor to handle any HTTP res, res errors
            $httpProvider.interceptors.push('userInterceptor');
        }
    ]);
