irfUiFormEngine.controller('EntityContentCtrl', function ($scope, $uibModalInstance, model) {
    $scope.entityData = {};
    $scope.title = model.title;
    $scope.entites = model.entites;
    console.log("In ui entity model!!!!")
    $scope.submitEntityDetails = function() {
        model.addEntity($scope.entityData);
        $scope.$close();
    }

    $scope.cancel = function () {
        $scope.$close();
    }
});