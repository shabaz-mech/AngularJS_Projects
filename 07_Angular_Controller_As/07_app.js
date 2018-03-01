var app = angular.module("NestedCtrlApp",[]);
app.controller("ParentCtrl",function() {
    this.myText = "";
});

app.controller("ChildCtrl",function() {
    this.myText = "";
});