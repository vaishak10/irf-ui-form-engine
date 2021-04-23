irfUiFormEngine.directive("genericQueue",function(){
    return {
        restrict : "AE",
        scope :{
            entity : "=",
        },
        replace: false,
        templateUrl:'bower_components/irf-ui-form-engine/source/templates/GenericQueue.html',
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
}]);