irfUiFormEngine.controller("EditorCtrl", ["$log", "$scope", "$state", "$stateParams", "$uibModal", "$q", "irfNavigator",
    function ($log, $scope, $state, $stateParams, $uibModal, $q, irfNavigator) {
        //$scope.data = $scope.$parent.data;
        console.log($scope.data);
        $scope.data.stages = $scope.data.stages || [];
        $scope.data.routes = $scope.data.routes || [];
        $scope.data.dashboards = $scope.data.dashboards || [];
        //Stage manipluation functions and methods.
        var addStage = function (stage) {
            $scope.data.stages.push(stage);
        }
        model.entites = ["Generic Queue", "Generic Detail", "Lead Detail"];

    var isDuplicateStages = function () {

            //array which consists of only name property from data.stage
            var valueArr = $scope.data.stages.map(function (item) {
                return item.name
            });

        //Checks if there are duplicate elements in the array
        //If duplicate elements are present returns true, else false
        var isDuplicate = valueArr.some(function (item, index) {
            return valueArr.indexOf(item) != index
        });

        return isDuplicate;
    }

        var removeDuplicates = function () {
            //removes the duplicate stage from data.stages based on name 
            $scope.data.stages = $scope.data.stages.filter((stage, index, arr) => arr.findIndex(s => (s.name === stage.name)) === index);
        };

        $scope.editStage = function($event,$index){
            $scope.data.stageIndex = $index;
            irfNavigator.go({
                "state": 'Page.Design.Process.Stage',
                "pageId": null,
                "pageData": {test:{}}
            });
        }

    $scope.removeStage = function($event,$index){
        $scope.data.stages.splice($index,1);
    }

        $scope.newStage = function () {
            var modalInstance = $uibModal.open({
                templateUrl: "modalContent.html",
                controller: "ModalContentCtrl",
                resolve: {
                    model: function () {
                        return {
                            addStage: addStage,
                            isDuplicateStages: isDuplicateStages,
                            removeDuplicates: removeDuplicates,
                            title: "Add Stages"
                        };
                    }
                }
                }
            )
        };

    //Entity manipulation functions and methods.
    var addEntity = function (entity) {
        entity.uuid = uuid();
        $scope.data.routes.push(entity);
        return 0;
    }
    function uuid(){
        var dt = new Date().getTime();
        var uuid = 'UIxxxEntityxxxxxxxRandomxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

        //Entity manipulation functions and methods.
    var addEntity = function (entity) {
        entity.uuid = uuid();
        $scope.data.routes.push(entity);
        return 0;
    }
    function uuid(){
        var dt = new Date().getTime();
        var uuid = 'UIxxxEntityxxxxxxxRandomxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
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
        $scope.data.routes.splice($index,1);
    }

    $scope.newEntity = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "entityModal.html",
            controller: "EntityContentCtrl",
            resolve: {
                model: function () {
                    return {
                        addEntity:addEntity,
                        title: "Add Entity",
                        entites: Object.keys($scope.data.uiEntities)
                    };
                }
            }
        });
    };

    //Add Dashboards and manipulation function
    var addDashboard = function (dashboardContent) {
        $scope.data.dashboards.push(dashboardContent);
        return 0;
    }

    $scope.newDashboard = function () {
        var modalInstance = $uibModal.open({
            templateUrl: "dashboardModal.html",
            controller: "DashboardContentCtrl",
            resolve: {
                model: function () {
                    return {
                        addDashboard:addDashboard,
                        title: "Add Dashboard",
                        routes: $scope.data.routes
                    };
                }
            }
        });
    };

$scope.removeDashboard = function($event,$index){
    $scope.data.dashboards.splice($index,1);
}

        //JSON file Creation on Export
        const saveTemplateAsFile = (filename, jsonToWrite) => {
            const blob = new Blob([jsonToWrite], { type: "text/json" });
            const link = document.createElement("a");
        
            link.download = filename;
            link.href = window.URL.createObjectURL(blob);
            link.dataset.downloadurl = ["text/json", link.download, link.href].join(":");
        
            const evt = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            });
        
            link.dispatchEvent(evt);
            link.remove();
        };
        const convert2serverJson = (rawData) => {
            var data = _.cloneDeep(rawData);
            delete data.processName;
            delete data.processType;
            data.stages.map(o => {
                o.code  = o.name;
                o.isAccountOpening = false;
                o.order = Number(o.order);
            });
            data.schema = {
                "$schema":"http://json-schema.org/draft-04/schema#",
                 "type":"object",
                 "properties":{},
                 "required":[]
            }
            return data;
        }
        $scope.export = () =>{
            saveTemplateAsFile("settings.json", JSON.stringify($scope.data,null,"\t"))
            saveTemplateAsFile("ServerJson."+$scope.data.processType+"-"+$scope.data.processName+".json",JSON.stringify(convert2serverJson($scope.data),null,"\t"));
        }
        //return data;
    }
])
