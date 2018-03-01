var app = angular.module("GroceryApp",[]);
app.controller("GroceryCtrl",function() {
    this.isEditMode  = false;
    this.lists = [

    ];

    this.addNewItem = function() {
        this.lists.push(this.newItem);
        this.newItem = "";
    };

    this.deleteItem = function(index) {
        this.lists.splice(index,1);
    };

    this.enableEditMode = function() {
        this.isEditMode = true;
    };
    this.disableEditMode = function() {
        this.isEditMode = false;
    }
});