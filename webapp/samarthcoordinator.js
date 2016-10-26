//@TODO place this module definition inside IIFE
angular.module("samarth-coordinator", ["ngMaterial",
    "ui.router",
    "ngMessages",
    'samarth-webcomponents', 'angularMoment', 'simplePagination'
])

.config(function($mdThemingProvider) {



    var customPrimary = {
        '50': '#bef5ff',
        '100': '#72e9ff',
        '200': '#3ae0ff',
        '300': '#00ccf1',
        '400': '#00b2d3',
        '500': '#0098b4',
        '600': '#007e95',
        '700': '#006477',
        '800': '#004a58',
        '900': '#00313a',
        'A100': '#bef5ff',
        'A200': '#72e9ff',
        'A400': '#00b2d3',
        'A700': '#006477',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
    };

    $mdThemingProvider.definePalette('customPrimary',
        customPrimary);


    var customAccent = {
        '50': '#000a08',
        '100': '#00231d',
        '200': '#003d31',
        '300': '#005646',
        '400': '#00705a',
        '500': '#00896f',
        '600': '#00bc97',
        '700': '#00d6ac',
        '800': '#00efc0',
        '900': '#0affcf',
        'A100': '#00bc97',
        'A200': '#00a383',
        'A400': '#00896f',
        'A700': '#23ffd4'
    };
    $mdThemingProvider.definePalette('customAccent',
        customAccent);

    var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
    };
    $mdThemingProvider.definePalette('customWarn',
        customWarn);

    var customBackground = {
        '50': '#ffffff',
        '100': '#ffffff',
        '200': '#ffffff',
        '300': '#ffffff',
        '400': '#ffffff',
        '500': '#ffffff',
        '600': '#f0f0f0',
        '700': '#e0e0e0',
        '800': '#d1d1d1',
        '900': '#c2c2c2',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#e0e0e0',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
    };
    $mdThemingProvider.definePalette('customBackground',
        customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        .backgroundPalette('customBackground')
});



/*{
    "candidateid": 1234567890,
    "verification_status": "grade",
    "verification_ratings": 0,
    "updated_on": new Date()
}
*/
