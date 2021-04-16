angular.module('irf.config', ['irf.ui.form.engine'])
.controller("ConfigCtrl",["$log", "$scope", "$state", "$stateParams","$q", "irfNavigator",
function($log, $scope, $state, $stateParams, $q, irfNavigator) {

    $scope.goToProcess = function(){
        irfNavigator.go({
            "state": 'Page.Design.Process',
            "pageName": 'Process',
            "pageId": null,
            "pageData": null
        });
    }

}]);