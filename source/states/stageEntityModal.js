irfUiFormEngine.controller('EntityContentCtrl', function ($scope, $uibModalInstance, model) {
    $scope.entityData = {};
    $scope.title = model.title;

    $scope.queue = [
        "Generic Queue Entity"
    ]

    $scope.detail = [
        "Generic Lead",
        "Generic Enrollement",
        "Generic LoanRequest"
    ]

    $scope.closeModal = function(entity) {
        $scope.entityData.name = entity;
        model.addEntity($scope.entityData);
        $scope.$close();
    }

    $scope.cancel = function () {
        $scope.$close();
    }
});