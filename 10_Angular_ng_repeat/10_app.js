var app = angular.module("GoodMorningApp",[]);
app.controller("GoodMorningCtrl",function() {

    this.username = "";
    this.count = [];
    this.countTimes = function() {
        console.log("This . times is : " + this.times);
        if(this.times === null){
            this.count = [];
        }
        else{
            for(var i = 0; i< this.times; i++){
                this.count[i] = i;
            }
        }
    };

});