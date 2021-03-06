var scripts = document.getElementsByTagName("script");
var currentScriptPath = scripts[scripts.length - 1].src;

angular.module('samarth-webcomponents')
    .component('verificationBadge', {
        templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf(
            '/')) + '/templates/badge.html',
        controller: badgeCtrl,
        bindings: {
            candidateid: '<'
        }
    });

function badgeCtrl(verificationbadgeservice) {
    var ctrl = this;
    verificationbadgeservice.getbadgedata(ctrl.candidateid)
        .then(function(res) {
            ctrl.verification_status = res.data[0].verification_status;
            ctrl.verification_ratings = res.data[0].verification_ratings;
            ctrl.updated_on = res.data[0].updated_on;
        }, function(err) {

        });



}
