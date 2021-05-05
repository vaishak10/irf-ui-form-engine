irf.pages.directive('readFile', function ($parse) {
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
    var pageDefPath = "perdix/application/PerdixApplication";
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