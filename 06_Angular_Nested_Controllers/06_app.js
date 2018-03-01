var app = angular.module("NestedCtrlApp",[]);
app.controller("ParentCtrl",function($scope) {
    $scope.myText = "";
});

app.controller("ChildCtrl",function($scope) {
    //$scope.myText = "";
});