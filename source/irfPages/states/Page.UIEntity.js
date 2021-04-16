irf.pages.directive("genericQueue",function(){
    return {
        restrict : "AE",
        scope :{
            entity : "=",
        },
        replace: false,
        template:`<div class="box box-theme">
        <div class="box-header with-border">
            <h3 class="box-title">Entity Information</h3>
        </div>
        <div class="box-body entity-info-box form-horizontal">
            <div class="config-body">
                <div class="config-info">
                    <div class="config-options config-title">
                        <label class="config-field">
                            Title
                        </label>
                        <input type="text" name="configTitle" class="config-title" ng-model="entity.title" required>
                    </div>
                    <div class="config-options config-search-title">
                        <label class="config-field">
                            Search Title
                        </label>
                        <input type="text" name="configTitle" class="config-search-title" ng-model="entity.searchTitle" required>
                    </div>
                    <div class="config-options config-api">
                        <label class="config-field" for="cars">Api Resolver </label>
                        <select name="cars" id="cars">
                        <option value="">Choose Api</option>
                        <option value="LeadApi">Lead Api</option>
                        <option value="IndividualLoanApi">Individual Loan Api</option>
                        </select>
                    </div>
                    <div class="config-options config-api">
                        <label class="config-field">
                            Filters 
                        </label>
                        <div>
                            <div class="container-div"><div class="temp-div" ng-show="entity.filters.length > 0" ng-repeat="filter in entity.filters track by $index"><div class="text-div">{{filter}}</div><i ng-click="removeApiFilter($index)"class="fa fa-close close-div"></i></div></div>
                            <select name="users" ng-show="filters" ng-options="filter for filter in filters" ng-model="tempSelected" ng-change="addFilter()">
                            <option value="">--Select Filter--</option>
                            </select>
                        </div>
                    </div>
                    <div class="config-options config-api">
                        <label class="config-field">
                            Columns 
                        </label>
                        <div>
                            <div class="container-div"><div class="temp-div" ng-show="entity.colDefinition.length > 0" ng-repeat="defnition in entity.colDefinition track by $index"><div class="text-div">{{defnition.title | translate }}</div><i ng-click="removeApiColDefnition($index)"class="fa fa-close close-div"></i></div></div>
                            <select name="users" ng-show="colDefinition" ng-options="colDef.name for colDef in colDefinition" ng-model="tempDefSelected" ng-change="addDef()">
                            <option value="">--Select Columns--</option>
                            </select>
                        </div>
                    </div>
                    <div class="config-options config-per-page">
                        <label class="config-field">
                            Per Page
                        </label>
                        <input type="text" name="configPerPage" class="config-per-page" ng-model="entity.perPage" required>
                    </div>
                    <div class="config-options config-server-paginate">
                        <label class="config-field">
                            Server Paginate
                        </label>
                        <input type="checkbox" name="configServerPaginate" class="config-server-paginate" ng-model="entity.serverPaginate" required>
                    </div>
                    <div class="config-options config-paginate">
                        <label class="config-field">
                            Paginate
                        </label>
                        <input type="checkbox" name="configPaginate" class="config-paginate" ng-model="entity.paginate" required>
                    </div>
                    <div class="config-options config-page-length">
                        <label class="config-field">
                            Page Length
                        </label>
                        <input type="text" name="configPageLength" class="config-page-length" ng-model="entity.pageLength" required>
                    </div>
                    <div class="config-options config-target-type">
                        <label class="config-field">
                            Target Type
                        </label>
                        <input type="text" name="configTargetType" class="config-target-type" ng-model="entity.targetType" required>
                    </div>
                    <div class="config-options config-target-page-name">
                        <label class="config-field">
                            Target Page Name
                        </label>
                        <input type="text" name="configTargetPageName" class="config-target-page-name" ng-model="entity.targetPageName" required>
                    </div>
                    <div class="config-options config-target-param">
                        <label class="config-field">
                            Target Param
                        </label>
                        <input type="text" name="configTargetParam" class="config-target-param" ng-model="entity.targetParam" required>
                    </div>
                    <div class="config-options config-style">
                        <label class="config-field">
                            Style
                        </label>
                        <input type="text" name="configStyle" class="config-style" ng-model="entity.style" required>
                    </div>
                </div>
                <div class="config-submit-section">
                    <hr>
                </div>
                <div class="config-submit">
                    <button ng-click="toConfig()" class="btn btn-theme">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <style>
    .temp-div{
        border: 1px solid #dddddd;
        cursor: pointer;
        text-align: center;
        padding: 1px;
        padding-right: 2px;
        border-radius: 4px;
        color: #444444;
        background-color: #f4f4f4;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 8fr 1fr;
    }
    .container-div{
        display:grid;
        grid-row-gap:0.2rem;
        max-height:100px;
        overflow-y:scroll;
    }
    .close-div:{
        justify-self: right;
        padding-right: 12px;
    }
</style>
        `,
        // template: "<jsoneditor ng-model='json.data' options='jsoneditorOptions' json='json'></jsoneditor>",
        controller:"genericQueueCtrl"
    }
}).directive("genericLead",function(){
    return {
        restrict : "AE",
        scope :{
            entity : "=",
        },
        replace: true,
        controller:"genericLeadCtrl",
        template: `
        <div class="box box-theme" style="margin-bottom:600px">
        <div class="box-header with-border">
            <h3 class="box-title">Entity Information</h3>
        </div>
        <div class="box-body entity-info-box form-horizontal">
            <div class="config-section">
                <hr>
            </div>
            <div>
                <json-editor options="obj.options" json="obj.data" editor="editor"></json-editor>
            </div>
            <div class="config-body">
                <div class="config-submit-section">
                    <hr>
                </div>
                <div class="config-submit">
                    <button ng-click="toConfig()" class="btn btn-theme">Submit</button>
                </div>
            </div>
        </div>
    </div> `
    }
}).controller("UIEntityCtrl",["$log", "$scope", "$state", "$stateParams","$q", "irfNavigator","$compile","PageHelper",
function($log, $scope, $state, $stateParams, $q, irfNavigator,$compile,PageHelper) {

    // console.log($scope.data);
    // $scope.rootModel = $scope.data;
    // $scope.rootModel.stages[$scope.data.stageIndex].entities[$scope.data.entityIndex] = $scope.rootModel.stages[$scope.data.stageIndex].entities[$scope.data.entityIndex] || [];
    console.log($scope.data);
    $scope.rootModel = $scope.data || {entities:[]};
    $scope.rootModel.entities[$scope.data.entityIndex] = $scope.rootModel.entities[$scope.data.entityIndex] || [];
    var entity = "GenericLead";
    if($scope.rootModel && $scope.rootModel.entities && $scope.rootModel.entities[$scope.data.entityIndex].name == "Generic Queue"){
        entity = "GenericQueue";
    }
    $scope.selectedEntity = $scope.rootModel.entities[$scope.data.entityIndex];
    $scope.selectedEntity.entityConfig = $scope.selectedEntity.entityConfig || {};
    $scope.entityConfig = $scope.selectedEntity.entityConfig;

    // var pageDefPath = "perdix/ui/uientity/UIEntityRegistry";
    // require([pageDefPath], function(tsObject) {

    // approach 1 : direct html from getRenderer()
        // var container = document.getElementById("uiEntityContainer")
        // var htmlcontent = tsObject.uiEntites.get("GenericLead").getRenderer();
        // $compile(htmlcontent,($scope));
        // container.innerHTML = (htmlcontent);

        // approach 2 : directive from getRenderer()
        var container   = document.getElementById("uiEntityContainer");
        var htmlContent = $scope.rootModel.uiEntities.get(entity).getRenderer();
        // var entityObj = tsObject.uiEntites.get(entity).getConfigDefinition();
        var content = $compile(htmlContent)($scope);
        // // var newScope = $scope.$new(true);
        // // newScope.entity = $scope.entityConfig;
        container.append(content[0]);
        // $scope.$watch((scope) => {return scope.entityConfig},(nv,ov)=>{
        //     $scope.rootModel.entities[$scope.data.entityIndex].entityConfig = nv;
        // },true)
    // approach 3 : html file and load dynamically
        // var container = document.getElementById("uiEntityContainer");
        // var htmlContentUrl = tsObject.uiEntites.get("GenericQueue").getRenderer();
        // fetch(htmlContentUrl /*, options */)
        //     .then((response) => response.text())
        //     .then((html) => {
        //         container.innerHTML = html;
        //     })
        //     .catch((error) => {
        //         console.warn(error);
        //     });
    // },function(err){
    //     $log.info("[REQUIRE] Error loading page(" + pageDefPath + ")");
    //     $log.error(err);
    // });
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

    // $scope.changeData = function () {
    //     $scope.obj.data = {foo: 'bar'};
    // };

    $scope.changeOptions = function () {
        $scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
    };

    //method1: Diff of newObj and oldObj
    // var diff = function (obj1, obj2) {
    //     const result = {};
    //     if (Object.is(obj1, obj2)) {
    //         return undefined;
    //     }
    //     if (!obj2 || typeof obj2 !== 'object') {
    //         return obj2;
    //     }
    //     Object.keys(obj1 || {}).concat(Object.keys(obj2 || {})).forEach(key => {
    //         if(obj2[key] !== obj1[key] && !Object.is(obj1[key], obj2[key])) {
    //             result[key] = obj2[key];
    //         }
    //         if(typeof obj2[key] === 'object' && typeof obj1[key] === 'object') {
    //             const value = diff(obj1[key], obj2[key]);
    //             if (value !== undefined) {
    //                 result[key] = value;
    //             }
    //         }
    //     });
    //     return result;
    // };  

    //method 2: Diff of newObj and oldObj
    // var filter = function(obj1, obj2) {
    //     var result = {};
    //     for(key in obj1) {
    //         if(obj2[key] != obj1[key]) result[key] = obj2[key];
    //         if(typeof obj2[key] == 'array' && typeof obj1[key] == 'array') 
    //             result[key] = arguments.callee(obj1[key], obj2[key]);
    //         if(typeof obj2[key] == 'object' && typeof obj1[key] == 'object') 
    //             result[key] = arguments.callee(obj1[key], obj2[key]);
    //     }
    //     return result;
    // };

    //Method 3:
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

}]).controller("genericQueueCtrl",["$scope",function($scope){
    // no use as of now;
    $scope.colDefinition = [
        {
            "title": "ID",
            "data": "loanId",
            name:"Id"
        },
        {
            "title": "SCREENING_DATE",
            "data": "screeningDate",
            name:"Screening Date"
        },
        {
            "title": "APPLICANT_NAME",
            "data": "applicantName",
            name:"Applicant Name"
        },
        {
            "title": "BUSINESS_NAME",
            "data": "customerName",
            name:"Business Name"
        },
        {
            "title": "AREA",
            "data": "area",
            name:"Area"
        },
        {
            "title": "CITY_TOWN_VILLAGE",
            "data": "villageName",
            name:"City Town Village"
        }
    ]
    $scope.filters = [
            "centre",
            "urn",
            "customerId",
            "area",
            "status"
    ]
    $scope.removeApiFilter = (index) => {
        $scope.entity.filters.splice(index,1);
    }
    $scope.removeApiColDefnition = (index) =>{
        $scope.entity.colDefinition.splice(index,1);
    }
    $scope.addFilter = () => {
        $scope.entity.filters = $scope.entity.filters || [];
        $scope.entity.filters.push($scope.tempSelected);
        $scope.tempSelected = null;
    }
    $scope.addDef = () =>{
        $scope.entity.colDefinition = $scope.entity.colDefinition || [];
        $scope.entity.colDefinition.push($scope.tempDefSelected);
        $scope.tempDefSelected = null;
    }
}]).controller("genericLeadCtrl",["$scope","PageHelper",function($scope,PageHelper){
    var json = $scope.entity.json;
    $scope.editor = {};
    if (_.isEmpty(json)) {
        json = {
            "leadProfile":{
               "type":"box",
               "title":"LEAD_PROFILE",
               "items":{
                  "branchName":{
                     "key":"leadProfile.branchName",
                     "title":"BRANCH_NAME",
                     "type":"select",
                     "readonly":false,
                     "required":false,
                     "orderNo":1
                  },
                  "centerName":{
                     "type":"select",
                     "enumCode":"centre",
                     "title":"CENTER_NAME",
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
    }
    $scope.obj = {
        data: json, 
        options: {
            mode: 'tree',
            onValidate: function (json) {
                const errors = [];
                if (json) {
                    Object.keys(json).forEach(parentKey => {
                        for (var [key,value] of Object.entries(json[parentKey]['items']))
                        {
                            if (value.type === 'box')
                            {
                                errors.push({path: [parentKey,'items',key], message: 'Box type not permitted inside items'});
                            }
                        }
                    });
                } else {
                  errors.push({path: [], message: 'Required property "object" missing'})
                }
                return errors
            },
            templates: [
                {
                  text:"Box",
                  title:"Box Details",
                  field:'BoxTemplate',
                  value: {
                    type:"box",
                    title:"",
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
            onChange:function(){
                console.log(arguments);
            }
        },
    };
    $scope.onLoad = function (instance) {
        instance.expandAll();
    };
    $scope.changeData = function () {
        $scope.obj.data = {foo: 'bar'};
    };
    $scope.changeOptions = function () {
        $scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
    };
    $scope.toConfig = () =>{
        $scope.obj.data = $scope.editor.get();
        var differenceObj  =  (diff($scope.entity.mainJson,$scope.obj.data));
        var rawOverrides = flattenObject(differenceObj);
        $scope.entity.overrides = getOverrides(rawOverrides);
        $scope.entity.json = $scope.obj.data;
        var compareObj = compare($scope.entity.mainJson,$scope.entity.json);
        console.log(compareObj);
        $scope.entity.repositoryAdditions = compare(differenceObj,compareObj)
        console.log($scope.entity.repositoryAdditions);
        $scope.entity.getIncludes = [];
        getAllIncludesFromJson("","",$scope.obj.data);
        PageHelper.showProgress('field-changes',"Json fields Changed successfully.")
    }
    $scope.entity.getIncludes = $scope.entity.getIncludes || [];

    var getOverrides = function(rawOverrides){
        var overrides = {};
        for(var [key,value] of Object.entries(rawOverrides)){
            key = key.replaceAll("items.","");
            var keysArray = key.split('.');
            var key2 = keysArray.pop();
            var key1 = keysArray.join('.');
            overrides[key1]= overrides[key1]||{};
            overrides[key1][key2]=value;
            //overrides[key.replaceAll("items.","")] = value;
        }
        return overrides;
    };
    var getAllIncludesFromJson = function (parentKey, previousKey, object) {
        var thisParentKey = previousKey + parentKey;
        var keys = Object.keys(object);
        if (keys.length <= 0)
            return;
        for (var i = 0; i < keys.length; i++) {
            $scope.entity.getIncludes.push(thisParentKey + keys[i]);
            if (typeof object[keys[i]].items != "undefined") {
                previousKey = thisParentKey;
                getAllIncludesFromJson(keys[i] + ".", previousKey, object[keys[i]].items);
            }
        }
        return;
    };

    //Find the differences occuring in the exisiting fields only
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

    //Compares the 2 objects ,and returns the changes from second object.
    function isEmpty( o ) {
        for ( var p in o ) { 
            if ( o.hasOwnProperty( p ) ) { return false; }
        }
        return true;
    }
    
    var compare = function(obj1, obj2) { 
      var ret = {},rett; 
      for(var i in obj2) { 
            rett = {};
            if (typeof obj2[i] === 'object'){
                if (typeof obj1[i] === 'undefined')
                {
                    rett=obj2[i];
                }
                else{
                    rett = compare(obj1[i], obj2[i]);
                } 
                if (!isEmpty(rett) ){
                    ret[i]= rett
                }              
            }else{
            if(!obj1 || !obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) { 
                ret[i] = obj2[i]; 
                } 
            }
        } 
      return ret; 
    }; 

    //Function to flatten the obj using dot notation.
    function flattenObject(ob) {
        var toReturn = {};
    
        for (var i in ob) {
            if (!ob.hasOwnProperty(i)) continue;
    
            if ((typeof ob[i]) == 'object' && ob[i] !== null) {
                var flatObject = flattenObject(ob[i]);
                for (var x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) continue;
    
                    toReturn[i + '.' + x] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
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