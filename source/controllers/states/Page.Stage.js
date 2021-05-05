irfUiFormEngine.controller("StageCtrl",["$log", "$scope", "$state", "$stateParams","$q", "$uibModal", "irfNavigator",
function($log, $scope, $state, $stateParams, $q, $uibModal, irfNavigator) {

    //$scope.data = $scope.$parent.data;
    console.log($scope.data);
    $scope.rootModel = $scope.data;
    $scope.rootModel.stages[$scope.data.stageIndex].entities = $scope.rootModel.stages[$scope.data.stageIndex].entities || [];

    var addEntity = function (entity) {
        $scope.rootModel.stages[$scope.data.stageIndex].entities.push(entity);
        return 0;
    }

    $scope.editEntity = function($event,$index){
        $scope.data.entityIndex = $index;
        irfNavigator.go({
            "state": 'Page.Design.Process.UIEntity',
            "pageId": null,
            "pageData": {test:{}}
        });
    }

    $scope.removeEntity = function($event,$index){
        $scope.data.stages[$scope.data.stageIndex].entities.splice($index,1);
    }

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "entityModal.html",
            controller: "EntityContentCtrl",
            resolve: {
                model: function () {
                    return {
                        addEntity:addEntity,
                        title: "Add Entity"
                    };
                }
            }
        });
    };

}])