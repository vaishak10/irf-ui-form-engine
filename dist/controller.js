var app = angular.module("uiFormEngine",[]);

app.config([
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
        .state({name:'Page.Design.Process.Home',  url: '/Home',   templateUrl: 'bower_components/irf-ui-form-engine/source/templates/Page.Process.html',controller: 'ProcessCtrl'})
        .state({name:'Page.Design.Process.Editor',url: '/Editor', templateUrl: 'bower_components/irf-ui-form-engine/source/templates/Page.Editor.html', controller: 'EditorCtrl' })
        .state({name:'Page.Design.Process.Stage', url: '/Stage',  templateUrl: 'bower_components/irf-ui-form-engine/source/templates/Page.Stage.html',  controller: 'StageCtrl'  })
        .state({name:'Page.Design.Process.UIEntity', url: '/UIEntity',  templateUrl: 'bower_components/irf-ui-form-engine/source/templates/Page.UIEntity.html',  controller: 'UIEntityCtrl'  })
        .state({name:'Page.Design.Process.Config', url: '/Config',  templateUrl: 'bower_components/irf-ui-form-engine/source/templates/Page.Config.html',  controller: 'ConfigCtrl'  })

}]);
app.controller("ConfigCtrl",["$log", "$scope", "$state", "$stateParams","$q", "irfNavigator",
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

app.controller("EditorCtrl", ["$log", "$scope", "$state", "$stateParams", "$uibModal", "$q", "irfNavigator",
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
                            title: "Add Stage"
                        };
                    }
                }
            });
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
                            title: "Add Dashboard"
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

    }
]).controller('ModalContentCtrl', function ($scope, $uibModalInstance, model) {

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
}).controller('EntityContentCtrl', function ($scope, $uibModalInstance, model) {
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
}).controller('DashboardContentCtrl', function ($scope, $uibModalInstance, model) {
    $scope.entityData = {};
    $scope.title = model.title;

    $scope.submitDashboardDetails = function() {
        model.addDashboard($scope.entityData);
        $scope.$close();
    }

    $scope.cancel = function () {
        $scope.$close();
    }
})
app.directive('readFile', function ($parse) {
	return {
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.readFile);
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};
				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
}).controller("ProcessCtrl",["$log", "$scope", "$state", "$stateParams","$q", "irfNavigator","PageHelper",
function($log, $scope, $state, $stateParams, $q, irfNavigator,PageHelper) { 
    $scope.$parent.data = {};
    $scope.data = $scope.$parent.data; 
    var pageDefPath = "perdix/Application/PerdixApplication";
    require([pageDefPath], function(tsObject) {
        console.log(tsObject);
        $scope.data.uiEntities = Object.fromEntries(tsObject.entityRegister.entites);
    },function(err){
        console.log(err);
    })
    // $scope.data = {uiEntities:$scope.data.uiEntities};

    // $scope.validationMessage = "";

    $scope.goToEditor = function(){
        console.log($scope.data.processName);
        console.log($scope.data.processType);
        if(!_.isEmpty($scope.data.processType) && !_.isEmpty($scope.data.processName))
        {
            irfNavigator.go({
                "state": 'Page.Design.Process.Editor',
                "pageId": null,
                "pageData": {test:{}}
            });
        }
        else {
            PageHelper.setError({
                message: "Please fill all the fields before submit."
            });
        }
    }

    $scope.validateContent = function($fileContent){
        $scope.content = $fileContent;
        $scope.parsedContent = JSON.parse($fileContent);
        console.log($scope.parsedContent);
        if(_.isEmpty($scope.parsedContent))
        {
            PageHelper.showProgress("file-error","object is empty Or no such file exists");
        }
        else if(_.isEmpty($scope.parsedContent.processType))
        {
            PageHelper.showProgress("file-error","Process type is missing");
        }
        else if(_.isEmpty($scope.parsedContent.processName)){
            PageHelper.showProgress("file-error","Process name is missing");
        }else {
            $scope.data.processName = $scope.parsedContent.processName;
            $scope.data.processType = $scope.parsedContent.processType;
            $scope.data.stages = $scope.parsedContent.stages;
            $scope.data.routes = $scope.parsedContent.routes;
            $scope.data.dashboards = $scope.parsedContent.dashboards;
            PageHelper.showProgress("process","Successfully Loaded the File",5000);
            // $scope.goToEditor();
        }   
    }

}]);
app.controller("StageCtrl",["$log", "$scope", "$state", "$stateParams","$q", "$uibModal", "irfNavigator",
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

}]).controller('EntityContentCtrl', function ($scope, $uibModalInstance, model) {
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
app.controller("UIEntityCtrl",["$log", "$scope", "$state", "$stateParams","$q", "irfNavigator","$compile","PageHelper",
function($log, $scope, $state, $stateParams, $q, irfNavigator,$compile,PageHelper) {


        var currentEntity    = $scope.data.routes[$scope.data.entityIndex].name;
        $scope.selectedRoute = $scope.data.routes[$scope.data.entityIndex];
        $scope.entityConfig     = $scope.data.uiEntities[currentEntity].getConfig();
        $scope.entityTemplate   = $scope.data.uiEntities[currentEntity].getRenderer();
        $scope.entityDefinition = $scope.data.uiEntities[currentEntity].getDefinition($scope.selectedRoute.entityDefinition);
    
        $scope.data.routes[$scope.data.entityIndex].entityDefinition = $scope.entityDefinition;
        var container   = document.getElementById("uiEntityContainer");
        var content = $compile($scope.entityTemplate)($scope);
        container.append(content[0]);
        
        var processJson = {
            "leadProfile":{
               "type":"box",
               "title":"LEAD_PROFILE",
               "items":{
                  "branchName":{
                     "key":"leadProfile.branchName",
                     "title": "BRANCH_NAME",
                     "type":"select",
                     "readonly":false,
                     "required":false,
                     "orderNo":1
                  },
                  "centerName":{
                     "type":"select",
                     "enumCode":"centre",
                     "title": "CENTER_NAME",
                     "key":"leadProfile.centerName",
                     "readonly":false,
                     "required":false,
                     "orderNo":2
                  },
                  "individualDetails":{
                     "type":"fieldset",
                     "title":"INDIVIDUAL_DETAILS",
                     "key":"leadProfile.individualDetails",
                     "readonly":false,
                     "required":false,
                     "orderNo":3,
                     "items":{
                        "existingApplicant":{
                           "key":"leadProfile.individualDetails.existingApplicant",
                           "type":"lov",
                           "title":"EXISTING_APPLICANT",
                           "readonly":false,
                           "required":false,
                           "orderNo":1
                        },
                        "applicantName":{
                           "key":"leadProfile.individualDetails.applicantName",
                           "type":"text",
                           "title":"APPLICANT_NAME",
                           "readonly":false,
                           "required":true,
                           "orderNo":2
                        },
                        "gender":{
                           "type":"radios",
                           "key":"leadProfile.leadDetails.individualDetails.gender",
                           "title":"GENDER",
                           "readonly":false,
                           "required":false,
                           "orderNo":3
                        },
                        "dob":{
                           "key":"leadProfile.leadDetails.individualDetails.dob",
                           "type":"date",
                           "title":"DATE_OF_BIRTH",
                           "readonly":false,
                           "required":false,
                           "orderNo":4
                        },
                        "age":{
                           "type":"text",
                           "key":"leadProfile.individualDetails.age",
                           "title":"AGE",
                           "readonly":true,
                           "required":false,
                           "orderNo":5
                        },
                        "maritalStatus":{
                           "key":"leadProfile.individualDetails.maritalStatus",
                           "type":"select",
                           "title":"MARTIAL_STATUS",
                           "readonly":false,
                           "required":false,
                           "orderNo":6
                        },
                        "educationStatus":{
                           "key":"leadProfile.individualDetails.educationStatus",
                           "type":"select",
                           "title":"EDUCATION_STATUS",
                           "readonly":false,
                           "required":false,
                           "orderNo":7
                        },
                        "occupation1":{
                           "key":"leadProfile.individualDetails.occupation1",
                           "type":"select",
                           "title":"PRIMARY_OCCUPTION",
                           "readonly":false,
                           "required":false,
                           "orderNo":8
                        },
                        "leadCategory":{
                           "key":"leadProfile.individualDetails.leadCategory",
                           "type":"select",
                           "title":"CUSTOMER_CATEGORY",
                           "readonly":false,
                           "required":true,
                           "orderNo":9
                        },
                        "licenseType":{
                           "key":"leadProfile.individualDetails.licenseType",
                           "type":"select",
                           "title":"LICENSE_TYPE",
                           "readonly":false,
                           "required":false,
                           "orderNo":10
                        }
                     }
                  },
                  "contactDetails":{
                     "type":"fieldset",
                     "title":"CONTACT_DETAILS",
                     "key":"leadProfile.contactDetails",
                     "readonly":false,
                     "required":false,
                     "orderNo":4,
                     "items":{
                        "mobileNo":{
                           "type":"number",
                           "key":"leadProfile.contactDetails.mobileNo",
                           "title":"MOBILE_NUMBER",
                           "readonly":false,
                           "required":true,
                           "orderNo":1
                        },
                        "alternateMobileNo":{
                           "type":"number",
                           "key":"leadProfile.contactDetails.alternateMobileNo",
                           "title":"ALTERNATE_NUMBER",
                           "readonly":false,
                           "required":false,
                           "orderNo":2
                        },
                        "location":{
                           "type":"geoloaction",
                           "key":"leadProfile.contactDetails.location",
                           "title":"LOCATION",
                           "readonly":false,
                           "required":false,
                           "orderNo":3
                        },
                        "addressLine1":{
                           "type":"text",
                           "key":"leadProfile.contactDetails.addressLine1",
                           "title":"DOOR/BUILDING",
                           "readonly":false,
                           "required":true,
                           "orderNo":4
                        },
                        "addressLine2":{
                           "type":"text",
                           "key":"leadProfile.contactDetails.addressLine2",
                           "title":"STREET",
                           "readonly":false,
                           "required":false,
                           "orderNo":5
                        },
                        "postOffice":{
                            "type":"text",
                            "key":"leadProfile.contactDetails.postOffice",
                            "title":"POST_OFFICE",
                            "readonly":false,
                            "required":false,
                            "orderNo":6
                        },
                        "area":{
                           "type":"text",
                           "key":"leadProfile.contactDetails.area",
                           "title":"AREA",
                           "readonly":true,
                           "required":false,
                           "orderNo":7
                        },
                        "cityTownVillage":{
                           "type":"text",
                           "key":"leadProfile.contactDetails.cityTownVillage",
                           "title":"CITY/TOWN/VILLAGE",
                           "readonly":true,
                           "required":false,
                           "orderNo":8
                        },
                        "landmark":{
                           "type":"text",
                           "key":"leadProfile.contactDetails.landmark",
                           "title":"LANDMARK",
                           "readonly":false,
                           "required":false,
                           "orderNo":9
                        },
                        "pincode":{
                           "key":"leadProfile.contactDetails.pincode",
                           "type":"lov",
                           "title":"PINCODE",
                           "readonly":false,
                           "required":true,
                           "orderNo":10
                        },
                        "district":{
                            "type":"text",
                            "key":"leadProfile.contactDetails.district",
                            "title":"DISTRICT",
                            "readonly":true,
                            "required":false,
                            "orderNo":8
                        },
                        "state":{
                            "type":"text",
                            "key":"leadProfile.contactDetails.state",
                            "title":"STATE",
                            "readonly":true,
                            "required":false,
                            "orderNo":8
                        }
                     }
                  }
               }
            },
            "sourceDetails":{
               "type":"box",
               "title":"SOURCE_DETAILS",
               "items":{
                  "leadSource":{
                    "key":"sourceDetails.leadSource",
                    "type":"select",
                    "title":"LEAD_SOURCE",
                    "readonly":false,
                    "required":false,
                    "orderNo":1
                  },
                  "referredBy":{
                    "key":"sourceDetails.referredBy",
                    "type":"select",
                    "title":"REFERRED_BY",
                    "readonly":false,
                    "required":false,
                    "orderNo":2
                  }
               }
            },
            "productDetails":{
               "type":"box",
               "title":"PRODUCT_DETAILS",
               "items":{
                  "interestedInProduct":{
                    "key":"productDetails.interestedInProduct",
                    "type":"select",
                    "title":"INTERESTED_IN_PRODUCT",
                    "readonly":false,
                    "required":true,
                    "orderNo":1
                  },
                  "loanAmountRequested":{
                    "key":"productDetails.loanAmountRequested",
                    "type":"select",
                    "title":"LOAN_AMOUNT_REQUESTED",
                    "readonly":false,
                    "required":true,
                    "orderNo":2
                  },
                  "loanPurpose1":{
                    "key":"productDetails.loanPurpose1",
                    "type":"select",
                    "title":"LOAN_PURPOSE",
                    "readonly":false,
                    "required":true,
                    "orderNo":3
                  },
                  "loanPurpose2":{
                    "key":"productDetails.loanPurpose2",
                    "type":"select",
                    "title":"LOAN_SUB_PURPOSE",
                    "readonly":false,
                    "required":false,
                    "orderNo":4
                  },
                  "productRequiredBy":{
                    "key":"productDetails.productRequiredBy",
                    "type":"select",
                    "title":"PRODUCT_REQUESTED_BY",
                    "readonly":false,
                    "required":true,
                    "orderNo":5
                  },
                  "screeningDate":{
                    "key":"productDetails.screeningDate",
                    "type":"date",
                    "title":"CUSTOMER_MEETING_DATE",
                    "readonly":false,
                    "required":true,
                    "orderNo":6
                     
                  },
                  "followUpDate":{
                    "type":"date",
                    "key":"productDetails.followUpDate",
                    "title":"LEAD_FOLLOWUP_DATE",
                    "readonly":false,
                    "required":true,
                    "orderNo":7
                  },
                  "productRejectionReason":{
                    "type":"fieldset",
                    "key":"productDetails.productRejectionReason",
                    "title":"PRODUCT_REJECTION_REASON",
                    "readonly":false,
                    "required":false,
                    "orderNo":8,
                     "items":{
                        "productRejectReason":{
                           "type":"text",
                           "key":"productDetails.productRejectionReason.productRejectionReason",
                           "title":"PRODUCT_REJECTION_REASON",
                           "readonly":false,
                            "required":true,
                            "orderNo":1
                        },
                        "productRejectAdditinalRemarks":{
                           "type":"text",
                           "key":"productDetails.productRejectionReason.productRejectAdditinalRemarks",
                           "title":"REMARKS",
                           "readonly":false,
                            "required":false,
                            "orderNo":2
                        }
                     }
                  },
                  "productEligibility":{
                    "key":"productDetails.productEligibility",
                    "type":"fieldset",
                    "title":"PRODUCT_ELIGIBILITY",
                    "readonly":false,
                    "required":false,
                    "orderNo":9,
                    "items":{
                        "eligibleForProduct":{
                            "key":"productDetails.productEligibility.eligibleForProduct",
                            "type":"checkbox",
                            "title":"ELIGIBILE_FOR_PRODUCT",
                            "readonly":false,
                            "required":false,
                            "orderNo":1
                        }
                    }
                  },
                  "leadStatus":{
                    "key":"productDetails.leadStatus",
                    "type":"fieldset",
                    "readonly":false,
                    "required":false,
                    "orderNo":10,
                    "items":{
                        "leadStatus":{
                            "type":"text",
                            "key":"productDetails.leadStatus.leadStatus",
                            "title":"LEAD_STATUS",
                            "readonly":true,
                            "required":false,
                            "orderNo":1
                        }
                    }
                  }
               }
            },
            "leadInteractions":{
               "type":"box",
               "title":"LEAD_INTERACTIONS",
               "items":{
                   "leadInteractions":{
                       "type":"fieldset",
                       "key":"leadInteractions.leadInteractions",
                       "title":"LEAD_INTERACTIONS_HISTORY",
                       "readonly":false,
                       "required":false,
                       "orderNo":1,
                       "items":{
                        "interactionDate":{
                            "type":"text",
                            "key":"leadInteractions.leadInteractions.interactionDate",
                            "title":"LEAD_INTERACTION_DATE",
                            "readonly":true,
                            "required":false,
                            "orderNo":1
                          },
                          "loanOfficerId":{
                            "type":"text",
                            "key":"leadInteractions.leadInteractions.loanOfficerId",
                            "title":"ACTION_TAKEN_BY",
                            "readonly":true,
                            "required":false,
                            "orderNo":2
                          },
                          "typeOfInteraction":{
                            "key":"leadInteractions.leadInteractions.typeOfInteraction",
                            "type":"select",
                            "title":"TYPE_OF_INTERACTION",
                            "readonly":false,
                            "required":true,
                            "orderNo":3
                          },
                          "customerResponse":{
                            "key":"leadInteractions.leadInteractions.customerResponse",
                            "type":"select",
                            "title":"CUSTOMER_RESPONSE",
                            "required":true,
                            "readonly":false,
                            "orderNo":4
                          },
                          "location":{
                            "type":"geoloaction",
                            "key":"leadInteractions.leadInteractions.location",
                            "title":"LOCATION",
                            "required":false,
                            "readonly":false,
                            "orderNo":5
                          },
                          "picture":{
                            "type":"file",
                            "key":"leadInteractions.leadInteractions.picture",
                            "title":"PICTURE",
                            "required":false,
                            "readonly":false,
                            "orderNo":6
                          }
                       }
                   }
               }
            }
        }
        if(_.isEmpty($scope.entityConfig.mainJson)){
            $scope.entityConfig.mainJson = processJson;
        }
        if (_.isEmpty($scope.entityConfig.json)) {
            json = processJson;
        }else{
            json = $scope.entityConfig.json
        }
    
        $scope.remove = {
            data: json,
            options: {
                mode: 'tree',
                templates: [
                    {
                      text:"Box",
                      title:"Box Details",
                      field:'BoxTemplate',
                      value: {
                        'title':"",
                        readonly:false,
                        condition:"1==1",
                        items:{}
                      }
                    },
                    {
                        text:"Select",
                        title:"Select",
                        field:"Select",
                        value:{
                            type:"select",
                            title:"",
                            orderno:"",
                            enumCode:"",
                            notitle:false,
                            required:false,
                            readonly:false,
                            key:""
                        }
                    },
                    {
                        text:"Date",
                        title:"Date",
                        field:"DateTemplate",
                        value:{
                            type:"date",
                            title:"",
                            orderno:"",
                            notitle:false,
                            required:false,
                            readonly:false,
                            key:""
                        }
                    },
                    {
                        text:"Amount",
                        title:"Amount",
                        field:"AmountTemplate",
                        value:{
                            type:"amount",
                            title:"",
                            orderno:"",
                            notitle:false,
                            required:false,
                            readonly:false,
                            key:""
                        }
                    },
                    {
                        text:"Check Box",
                        title:"Check Box",
                        field:"CheckBoxTemplate",
                        value:{
                            type:"checkbox",
                            title:"",
                            orderno:"",
                            notitle:false,
                            required:false,
                            readonly:false,
                            schema:{
                                default:false
                            },
                            key:""
                        }
                    },
                    {
                        text:"Radio",
                        title:"Radio",
                        field:"RadioTemplate",
                        value:{
                            type:"radios",
                            title:"",
                            orderno:"",
                            enumCode:"",
                            notitle:false,
                            required:false,
                            readonly:false,
                            titleMap:{
                                "Yes":"Yes",
                                "No":"No"
                            },
                            key:""
                        }
                    },
                ],
            }    
        };
    
        $scope.onLoad = function (instance) {
            instance.expandAll();
        };
        $scope.changeOptions = function () {
            $scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
        };
        var isEmptyObject = function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        };
    
        var diff = function(obj1, obj2) {
            var result = {};
            var change;
            for (var key in obj1) {
                if (typeof obj2[key] == 'object' && typeof obj1[key] == 'object') {
                    change = diff(obj1[key], obj2[key]);
                    if (isEmptyObject(change) === false) {
                        result[key] = change;
                    }
                }
                else if (obj2[key] != obj1[key]) {
                    result[key] = obj2[key];
                }
            }
            return result;
        };
    
        
        // $scope.$watchCollection('obj.data', function(newVal,oldVal) {
        //     console.log(diff(oldVal,newVal));
        // }, true);
    
        //other
        $scope.pretty = function (obj) {
            return angular.toJson(obj, true);
        }
    
        $scope.newConfig = () => {
            var modalInstance = $uibModal.open({
                templateUrl: "configModal.html",
                controller: "configCtrl",
                resolve: {
                    model: function () {
                        return {
                            addConfig:addConfig,
                            title: "Add Dashboard"
                        };
                    }
                }
            });
        };
        $scope.editConfig = ($index) => {
            $scope.data.configIndex = $index;
            $scope.data.selectedEntity = $scope.entityDefinition;
            irfNavigator.go({
                "state": 'Page.Design.Process.Config',
                "pageId": null,
                "pageData": {test:{}}
            });
            
        };
        $scope.removeConfig = ($index) => {
            $scope.entityDefinition.config.splice($index,1);
        };
        var addConfig = function (dashboardContent) {
            $scope.entityDefinition.config.push(dashboardContent);
            return 0;
        }

}]).directive('jsonEditor', function(){
    return {
        scope: {
            options: '=',
            json: '=',
            editor: '='
        },
        restrict: 'E',
        transclude: false,
        link: function (scope, element) {
            var editor = null, defaultOptions = {
                    mode: 'form',
                    editable: false
                },
                options = angular.extend(defaultOptions, scope.options);

            if(typeof(scope.options.change) === 'function'){
                options.change = function(){
                    //debugger;
                    scope.json = editor.get();
                    if(editor !== null){
                        scope.options.change(editor.get());
                    }
                }
            }

            editor = new JSONEditor(element[0], options, scope.json);
            scope.editor = editor;
            scope.$watch(
                'json',
                function (newValue, oldValue) {
                    //debugger;
                    editor.set(newValue);                
                }
            );
        }
    };
});