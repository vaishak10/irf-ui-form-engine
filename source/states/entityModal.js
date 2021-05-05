irfUiFormEngine.controller('EntityContentCtrl', function ($scope, $uibModalInstance, model) {
    $scope.entityData = {};
    $scope.title = model.title;
    $scope.entites = model.entites;



    $scope.submitEntityDetails = function() {
        model.addEntity($scope.entityData);
        $scope.$close();
    }

    $scope.cancel = function () {
        $scope.$close();
    }
});