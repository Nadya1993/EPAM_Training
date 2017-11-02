function calculator(){
    var buffer = 0;
    var checkValue = function(value){
        if (value === undefined || value === null || typeof value === string || 
            typeof value === array ||typeof value === object ){
                return false;
            }
            else return true;
    }
    return {
        add : function (value1){
            buffer += value1;
            return function(value2){
                if (checkValue(value2)){
                    return buffer += value2;
                }
                    else return buffer;
            }
        }, 
        subtract : function (value1){
            buffer -= value1;
            return function(value2){
                if (checkValue(value2)){
                    return buffer -= value2;
                }
                    else return buffer;
            }
        }, 
        multiply : function (value1){
            buffer *= value1;
            return function(value2){
                if (checkValue(value2)){
                    return buffer *= value2;
                }
                    else return buffer;
            }
        }, 
        divide : function (value1){
            buffer /= value1;
            return function(value2){
                if (checkValue(value2)){
                    return buffer /= value2;
                }
                    else return buffer;
            }
        },
        getResult : function(){
            return buffer;
        } 
    }
}

var calc = new calculator();
console.log(calc.add(10)());
console.log(calc.subtract(5));
console.log(calc.getResult());
//12;
