function calculator(){
    var buffer = 0;
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
console.log(calc.divide(2)());