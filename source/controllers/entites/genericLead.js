irfUiFormEngine.directive("genericLead",function(){
   return {
       restrict : "AE",
       scope :{
           config : "=",
           definition : "=",
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
               <div id="jsonEditorAnchor">
               <json-editor options="obj.options" json="obj.data" editor="editor"></json-editor>
               </div>
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
}).controller("genericLeadCtrl",["$scope","PageHelper",function($scope,PageHelper){
   var json = $scope.definition.json;
   $scope.editor = {};
   if (_.isEmpty(json)) {
       json = $scope.config.processJson;
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
           },
           popupAnchor:document.getElementById("jsonEditorAnchor")
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
       var differenceObj  =  (diff($scope.config.processJson,$scope.obj.data));
       var rawOverrides = flattenObject(differenceObj);
       $scope.definition.overrides = getOverrides(rawOverrides);
       $scope.definition.json = $scope.obj.data;
       var compareObj = compare($scope.config.processJson,$scope.definition.json);
       console.log(compareObj);
       $scope.definition.repositoryAdditions = compare(differenceObj,compareObj)
       console.log($scope.definition.repositoryAdditions);
       $scope.definition.getIncludes = [];
       getAllIncludesFromJson("","",$scope.obj.data);
       PageHelper.showProgress('field-changes',"Json fields Changed successfully.")
   }
   $scope.definition.getIncludes = $scope.definition.getIncludes || [];

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
           return overrides;

       }
   };
   // console.log(overrides);
   // $scope.definition.overrides = overrides;
   // $scope.definition.json = $scope.obj.data;
   // $scope.definition.getIncludes = [];
   // getAllIncludesFromJson("","",$scope.obj.data);
   // PageHelper.showProgress('field-changes',"Json fields Changed successfully.");
   // $scope.definition.getIncludes = $scope.definition.getIncludes || [];

   var getAllIncludesFromJson = function (parentKey, previousKey, object) {
       var thisParentKey = previousKey + parentKey;
       var keys = Object.keys(object);
       if (keys.length <= 0)
           return;
       for (var i = 0; i < keys.length; i++) {
           $scope.definition.getIncludes.push(thisParentKey + keys[i]);
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


}])