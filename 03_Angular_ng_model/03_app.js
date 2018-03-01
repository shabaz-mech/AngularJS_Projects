var app = angular.module("NgModelApp",[]);
app.controller("NgModelCtrl",function ($scope) {
    $scope.validateMe = function () {
        alert("Validation Success");
    };
});