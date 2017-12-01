var Calculator = function(){
    var buffer = 0;
    this.add = function(value1){
        buffer += value1;
        return function(value2){
            if (value2){
                return buffer += value2;
            }
            else {
                return buffer;
            }
        };
    };
    this.subtract = function(value1){
        buffer -= value1;
        return function(value2){
            if (value2){
                return buffer -= value2;
            }
            else {
                return buffer;
            }
        };
    };
    this.multiply = function(value1){
        buffer *= value1;
        return function(value2){
            if (value2){
                return buffer *= value2;
            }
            else {
                return buffer;
            }
        };
    };
    this.divide = function(value1){
        buffer /= value1;
        return function(value2){
            if (value2){
                return buffer /= value2;
            }
            else {
                return buffer;
            }
        };
    };
    this.reset = function(){
        return buffer = 0;
    };
    this.result = function(){
        return buffer;
    };
}

var calc = new Calculator();
console.log(calc.add(5)(10));
console.log(calc.add(5)());
console.log(calc.result());
console.log(calc.reset());