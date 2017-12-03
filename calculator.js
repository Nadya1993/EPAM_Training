var Calculator = function(){
    var buffer = 0;
    this.add = function(value1){
        buffer += value1;
        return function(value2){
            if (value2){
                return buffer = value1 + value2;
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
                return buffer = value1 - value2;
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
                return buffer = value1 * value2;
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
                return buffer = value1 / value2;
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

function init(){
  var calc = new Calculator();

  var contaner = document.getElementById("contaner");
  var calcItem = document.createElement('div');
  calcItem.setAttribute('class', 'calculator');
  contaner.appendChild(calcItem);
  var field = document.createElement("input");
  field.setAttribute("type", "text");
  field.setAttribute("placeholder", "0");
  field.setAttribute("readonly", "true");
  field.setAttribute("class", "field");
  calcItem.appendChild(field);

  var buttons = new Array(9).fill("1");
  buttons.forEach(function(elem, i){
    buttons.fill((i+1).toString(), i, i+1);
  });
  buttons.splice(3, 0, "+");
  buttons.splice(7, 0, "-");
  buttons.push("*");
  buttons.push(".");
  buttons.push("C");
  buttons.push("=");
  buttons.push(":")

  var getResult = function(){
    var operation = field.value.match(/[\-\:\*\+]/)[0];
    var value1 = Number(field.value.slice(0, field.value.indexOf(operation)));
    var value2 = Number(field.value.slice(field.value.indexOf(operation)+1));
    if (value1 != "" && value2 != ""){
      switch (operation){
        case "+": 
          field.value = calc.add(value1)(value2); 
          break;
        case "-": 
          field.value = calc.subtract(value1)(value2); 
          break;
        case "*": 
          field.value = calc.multiply(value1)(value2); 
          break;
        case ":": 
          field.value = calc.divide(value1)(value2); 
          break;
      };
    }
  }

  var reset = function(){
    calc.reset;
    field.value = "";
  }
  
  buttons.forEach(function(elem, i){
    var button = document.createElement("button");
    button.innerHTML = elem;
    button.setAttribute("class", "btn");
    switch (elem){
      case "=":
        button.addEventListener("click", getResult);
        break;
      case "C":
        button.addEventListener("click", reset);
        break;
      case ".":
        button.addEventListener("click", setDot);
        break;
      default:
        button.addEventListener("click", setExpression);
    }
    calcItem.appendChild(button);
  });

  
  function setExpression(){
    var field = this.parentNode.querySelector(".field");
    if (field.value != "" && field.value.match(/[\-\:\*\+]/) != null && this.innerHTML.match(/[\-\:\*\+]/) != null){
      console.log(field.value.match(/[\-\:\*\+]/)[0]);
      getResult();
      field.value += this.innerHTML;
    }
    else if (!(this.innerHTML.match(/[\-\:\*\+]/) != null && field.value == ""))
      field.value += this.innerHTML;
  }

  function setDot(){
    var operation = field.value.match(/[\-\:\*\+]/);
    if (operation != null){
      var value2 = field.value.slice(field.value.indexOf(operation[0])+1);
      if (value2.indexOf(".") == -1){
        field.value += this.innerHTML;
      }
    }
    else if (field.value.indexOf(".") == -1){
      field.value += this.innerHTML;
    }
  }

}




