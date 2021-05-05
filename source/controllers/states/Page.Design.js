var irfUiFormEngine = angular.module("uiFormEngine",[]);

irfUiFormEngine.config([
	"$stateProvider", "$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
        // https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#abstract-states
        // abstract: true is not a direct state but will be triggered when any of its child is being accessed.
        // console.log(JSONEditor());
        $stateProvider
        .state({name:'Page.Design.Process',url: '/Process',  template: '<div style="position:relative;"><button ng-click="export()" style="position:absolute;right:20px;">Export</button></div><div><ui-view/></div>', abstract: true , controller: function($scope){
            $scope.data = {
                processName : '',
                processType : ''
            }
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
        }})
        .state({name:'Page.Design.Process.Home',  url: '/Home',   templateUrl: 'bower_components/irf-ui-form-engine/source/templates/states/Page.Process.html',controller: 'ProcessCtrl'})
        .state({name:'Page.Design.Process.Editor',url: '/Editor', templateUrl: 'bower_components/irf-ui-form-engine/source/templates/states/Page.Editor.html', controller: 'EditorCtrl' })
        .state({name:'Page.Design.Process.Stage', url: '/Stage',  templateUrl: 'bower_components/irf-ui-form-engine/source/templates/states/Page.Stage.html',  controller: 'StageCtrl'  })
        .state({name:'Page.Design.Process.UIEntity', url: '/UIEntity',  templateUrl: 'bower_components/irf-ui-form-engine/source/templates/states/Page.UIEntity.html',  controller: 'UIEntityCtrl'  })
        .state({name:'Page.Design.Process.Config', url: '/Config',  templateUrl: 'bower_components/irf-ui-form-engine/source/templates/states/Page.Config.html',  controller: 'ConfigCtrl'  })

}]);



