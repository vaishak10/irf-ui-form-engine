irfUiFormEngine.controller("UIEntityCtrl",["$log", "$scope", "$state", "$stateParams","$q", "irfNavigator","$compile","PageHelper",
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
            templateUrl: "bower_components/irf-ui-form-engine/source/templates/configModal.html",
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

}]).controller('configCtrl', function ($scope, $uibModalInstance, model) {
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