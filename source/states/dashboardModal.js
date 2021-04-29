irfUiFormEngine.controller('DashboardContentCtrl', function ($scope, $uibModalInstance, model) {
    $scope.entityData = {};
    $scope.title = model.title;

    $scope.submitDashboardDetails = function() {
        model.addDashboard($scope.entityData);
        $scope.$close();
    }

    $scope.cancel = function () {
        $scope.$close();
    }
});