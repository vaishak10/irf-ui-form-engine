irfUiFormEngine.directive("genericQueue",function(){
    return {
        restrict : "AE",
        scope :{
            entity : "=",
        },
        replace: false,
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
        </div> `,
        // template: "<jsoneditor ng-model='json.data' options='jsoneditorOptions' json='json'></jsoneditor>",
        controller:"genericQueueCtrl"
    }
}).controller("genericQueueCtrl",["$scope",function($scope){
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