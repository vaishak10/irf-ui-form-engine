irfUiFormEngine.controller('configCtrl', function ($scope, $uibModalInstance, model) {
    $scope.entityData = {};
    $scope.title = model.title;

    $scope.submitDashboardDetails = function() {
        model.addConfig($scope.entityData);
        $scope.$close();
    }

    $scope.cancel = function () {
        $scope.$close();
    }
});