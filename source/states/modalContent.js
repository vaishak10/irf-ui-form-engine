irfUiFormEngine.controller('ModalContentCtrl', function ($scope, $uibModalInstance, model) {

    $scope.dialogData = {};
    $scope.isDuplicateMessage = "";
    $scope.title = model.title;

    $scope.submitStageDetails = function () {
        model.addStage($scope.dialogData);
        if (!model.isDuplicateStages()) {
            $scope.$close();
        }
        else {
            $scope.isDuplicateMessage = `${$scope.dialogData.name} already exists!!!`;
            model.removeDuplicates();
        }
    };

    $scope.cancel = function () {
        $scope.$close();
    }
});