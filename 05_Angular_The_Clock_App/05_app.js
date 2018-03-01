var app = angular.module("ClockApp",[]);
app.controller("ClockAppCtrl",function($scope,$interval) {
    var americanClock = function() {
        var today = new Date();
        var options = {timeZone:'America/New_York'};
        $scope.americanTime = today.toLocaleTimeString('en-US',options);
        $scope.americanDate = today.toLocaleDateString('en-US',options);
    };
    $interval(americanClock, 1000);
    americanClock();

    var indianClock = function() {
        var today = new Date();
        var options = {timeZone:'Asia/Kolkata'};
        $scope.indianTime = today.toLocaleTimeString('en-US',options);
        $scope.indianDate = today.toLocaleDateString('en-US',options);
    };
    $interval(indianClock, 1000);
    indianClock();

    var chinaClock = function() {
        var today = new Date();
        var options = {timeZone:'Asia/Shanghai'};
        $scope.chinaTime = today.toLocaleTimeString('en-US',options);
        $scope.chinaDate = today.toLocaleDateString('en-US',options);
    };
    $interval(chinaClock, 1000);
    chinaClock();
});