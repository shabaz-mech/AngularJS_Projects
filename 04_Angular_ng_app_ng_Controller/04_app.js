var app = angular.module("facebookApp",[]);
app.controller("facebookCtrl",function ($scope,$interval) {
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.total = 0;
    $scope.liked = function () {
        $scope.likes++;
        $scope.total++;
    };
    $scope.disliked = function () {
        $scope.dislikes++;
        $scope.total++;
    };
});