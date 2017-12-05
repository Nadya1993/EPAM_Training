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
  buttons.push("0");
  buttons.push("/")
  buttons.push("=");

    buttons.forEach(function(elem, i){
    var button = document.createElement("button");
    button.innerHTML = elem;
    button.setAttribute("class", "btn");
    switch (elem){
      case "=":
        button.style["width"] = "300px";
        // button.addEventListener("click", getResult);
        button.setAttribute("class", "equal");
        break;
      case "C":
        // button.addEventListener("click", reset);
        button.setAttribute("class", "clear");
        break;
      case ".":
        // button.addEventListener("click", setDot);
        button.setAttribute("class", "dot");
        break;
      case "+":
        button.setAttribute("class", "add");
        break;
      case "-":
        button.setAttribute("class", "subtract");
        break;
      case "*":
        button.setAttribute("class", "multiple");
        break;
      case "/":
        button.setAttribute("class", "divide");
        break;
      default:
      button.setAttribute("class", "number");
    }
    calcItem.appendChild(button);
  });

  // controller

  var StartState = function(){
    return {
      items : ["", ""],
      currentItem : 0,
      currentOperation : null,
      currentAction : true //вводим цифры
    };
  };

  var state = new StartState();

  document.querySelectorAll(".calculator").forEach(function(el){
    el.addEventListener("click", function(){
      if (document.querySelector(".btn .dot")){
        console.log("www");
      }
    })
  });

  var getResult = function(){
    // var value1;
    // var value2;
    // var val;
    // if (field.value[0]=="-"){
    //     val = field.value.slice(1);
    //     value1 = -1;
    // }
    // else{
    //     val = field.value;
    //     value1 = 1;
    // }
    // var operation = val.match(/[\-\:\*\+]/)[0];
    // value1 *= Number(val.slice(0, val.indexOf(operation)));
    // value2 = Number(val.slice(val.indexOf(operation)+1));
    
    // if (value1 != "" && value2 != ""){
    //   switch (operation){
    //     case "+": 
    //       field.value = calc.add(value1)(value2); 
    //       break;
    //     case "-": 
    //       field.value = calc.subtract(value1)(value2); 
    //       break;
    //     case "*": 
    //       field.value = calc.multiply(value1)(value2); 
    //       break;
    //     case ":": 
    //       field.value = calc.divide(value1)(value2); 
    //       break;
    //   };
    // }
  }

  var reset = function(){
    calc.reset;
    field.value = "";
    state = new StartState();
  }


  document.querySelector
  
  // buttons.forEach(function(elem, i){
  //   var button = document.createElement("button");
  //   button.innerHTML = elem;
  //   button.setAttribute("class", "btn");
  //   switch (elem){
  //     case "=":
  //       button.style["width"] = "300px";
  //       button.addEventListener("click", getResult);
  //       break;
  //     case "C":
  //       button.addEventListener("click", reset);
  //       break;
  //     case ".":
  //       button.addEventListener("click", setDot);
  //       break;
  //     default:
  //       button.addEventListener("click", setExpression);
  //   }
  //   calcItem.appendChild(button);
  // });

  
  function setExpression(){
    var field = this.parentNode.querySelector(".field");
    if (field.value != "" 
        && ((field.value[0]=="-")?field.value.slice(1):field.value).match(/[\-\:\*\+]/) != null 
        && this.innerHTML.match(/[\-\:\*\+]/) != null){
        getResult();
        field.value += this.innerHTML;
    }
    else if (!(this.innerHTML.match(/[\:\*\+]/) != null && field.value == ""))
      field.value += this.innerHTML;
  }

  // function setDot(){
  //   var operation = field.value.match(/[\-\:\*\+]/);
  //   if (operation != null){
  //     var value2 = field.value.slice(field.value.indexOf(operation[0])+1);
  //     if (value2.indexOf(".") == -1){
  //       field.value += this.innerHTML;
  //     }
  //   }
  //   else if (field.value.indexOf(".") == -1){
  //     field.value += this.innerHTML;
  //   }
  // }

}




