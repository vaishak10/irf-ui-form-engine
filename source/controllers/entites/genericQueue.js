irfUiFormEngine.directive("genericQueue",function(){
    return {
        restrict : "AE",
        scope :{
            definition : "=",
            config:"="
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
                        <input type="text" name="configTitle" class="config-title" ng-model="definition.title" required>
                    </div>
                    <div class="config-options config-search-title">
                        <label class="config-field">
                            Search Title
                        </label>
                        <input type="text" name="configTitle" class="config-search-title" ng-model="definition.searchTitle" required>
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
                            <div class="container-div"><div class="temp-div" ng-show="definition.filters.length > 0" ng-repeat="filter in definition.filters track by $index"><div class="text-div">{{filter}}</div><i ng-click="removeApiFilter($index)"class="fa fa-close close-div"></i></div></div>
                            <select name="users" ng-show="config.filters" ng-options="filter for filter in config.filters" ng-model="tempSelected" ng-change="addFilter()">
                            <option value="">--Select Filter--</option>
                            </select>
                        </div>
                    </div>
                    <div class="config-options config-api">
                        <label class="config-field">
                            Columns 
                        </label>
                        <div>
                            <div class="container-div"><div class="temp-div" ng-show="definition.columns.length > 0" ng-repeat="defnition in definition.columns track by $index"><div class="text-div">{{defnition.title | translate }}</div><i ng-click="removeApiColDefnition($index)"class="fa fa-close close-div"></i></div></div>
                            <select name="users" ng-show="config.columns" ng-options="colDef.name for colDef in config.columns" ng-model="tempDefSelected" ng-change="addDef()">
                            <option value="">--Select Columns--</option>
                            </select>
                        </div>
                    </div>
                    <div class="config-options">
                    <label class="config-field">
                                    Stage
                    </label>
                    <input type="text" name="configPerPage" class="config-per-page" ng-model="definition.stage" required>
                    </div>
                    <div class="config-options config-per-page">
                        <label class="config-field">
                            Per Page
                        </label>
                        <input type="text" name="configPerPage" class="config-per-page" ng-model="definition.perPage" required>
                    </div>
                    <div class="config-options config-server-paginate">
                        <label class="config-field">
                            Server Paginate
                        </label>
                        <input type="checkbox" name="configServerPaginate" class="config-server-paginate" ng-model="definition.serverPaginate" required>
                    </div>
                    <div class="config-options config-paginate">
                        <label class="config-field">
                            Paginate
                        </label>
                        <input type="checkbox" name="configPaginate" class="config-paginate" ng-model="definition.paginate" required>
                    </div>
                    <div class="config-options config-page-length">
                        <label class="config-field">
                            Page Length
                        </label>
                        <input type="text" name="configPageLength" class="config-page-length" ng-model="definition.pageLength" required>
                    </div>
                    <div class="config-options config-style">
                        <label class="config-field">
                            Style
                        </label>
                        <input type="text" name="configStyle" class="config-style" ng-model="definition.style" required>
                    </div>
                    <div>
                        <lable class="config-field">
                            Action
                        </label>
                        <select ng-model="definition.action">
                            <option value="generation"> Lead Generation</option>
                            <option value="incomplete"> Lead Incomplete</option>
                            <option value="readyForScreening"> Lead Ready For Screening</option>
                        </select>
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
}).controller("genericQueueCtrl",["$scope",function($scope){
    // no use as of now;
    $scope.removeApiFilter = (index) => {
        $scope.definition.filters.splice(index,1);
    }
    $scope.removeApiColDefnition = (index) =>{
        $scope.definition.columns.splice(index,1);
    }
    $scope.addFilter = () => {
        $scope.definition.filters = $scope.definition.filters || [];
        $scope.definition.filters.push($scope.tempSelected);
        $scope.tempSelected = null;
    }
    $scope.addDef = () =>{
        $scope.definition.columns = $scope.definition.columns || [];
        $scope.definition.columns.push($scope.tempDefSelected);
        $scope.tempDefSelected = null;
    }
}]);