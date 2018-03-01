var app = angular.module("CalculatorApp",[]);

app.controller("CalculatorCtrl",function() {

    this.operator = "+";
    this.result = "Output here";
    this.selectedOperator = function(operator) {
        console.log("the selected operator is  : " + operator);
        this.operator = operator;
    };
    this.calculate = function() {

        switch(this.operator){
            case '+':
                this.result = this.num1 + this.num2;
                break;
            case '-':
                this.result = this.num1 - this.num2;
                break;
            case '*':
                this.result = this.num1 * this.num2;
                break;
            case '/':
                this.result = this.num1 / this.num2;
                break;
            default:
                this.result = " ";
                break;
        }
    };
    this.clearAll = function() {
      this.num1 = "";
      this.num2 = "";
      this.result = "Output here";
      this.operator = "+";
    };

});