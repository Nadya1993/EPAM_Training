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
    //123
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


/*
function calculator(){
    buffer = 0;
    return {
        add : function (value1){
            return function(value2){
                if (value2){
                    return buffer = value1 + value2;
                }
                else {
                    return buffer += value1;
                }
            }
        }, 
        deduct : function (value1){
            return function(value2){
                if (value2){
                    return buffer = value1 - value2;
                }
                else {
                    return buffer -= value1;
                }
            }
        }, 
        multiply : function (value1){
            return function(value2){
                if (value2){
                    return buffer = value1 * value2;
                }
                else {
                    return buffer *= value1;
                }
            }
        }, 
        divide : function (value1){
            return function(value2){
                if (value2){
                    return buffer = value1 / value2;
                }
                else {
                    return buffer /= value1;
                }
            }
        } 
    }
}

var calc = new calculator();
console.log(calc.deduct(10)(8));
console.log(calc.divide(2)());*/