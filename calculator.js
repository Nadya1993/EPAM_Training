var Calculator = function(){
    var buffer = 0;
    this.add = function(value1){
        buffer += Number(value1);
        return function(value2){
            if (value2){
                return buffer = Number(value1) + Number(value2);
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

  //new calculator interface
  var container = document.getElementById("container");
  var calcItem = document.createElement('div');
  calcItem.setAttribute('class', 'calculator');

  var id = document.getElementsByClassName("calculator").length;
  calcItem.setAttribute('id', id+1);

  container.appendChild(calcItem);
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
    switch (elem){
      case "=":
        button.style["width"] = "300px";
        button.setAttribute("class", "btn equal");
        break;
      case "C":
        button.setAttribute("class", "btn clear");
        break;
      case ".":
        button.setAttribute("class", "btn dot");
        break;
      case "+":
        button.setAttribute("class", "btn add");
        break;
      case "-":
        button.setAttribute("class", "btn subtract");
        break;
      case "*":
        button.setAttribute("class", "btn multiply");
        break;
      case "/":
        button.setAttribute("class", "btn divide");
        break;
      default:
      button.setAttribute("class", "btn number");
    }
    calcItem.appendChild(button);
  });

 // controller
  var StartState = function(){ 
    return {
      items : ["", ""],
      currentItem : 0,
      currentOperation : null,
      currentAction : true, //вводим цифры, false - операция
      hasDot : false //следим за наличием точки
    };
  };

var state = new StartState();
//new calculator
var calc = new Calculator();

  function debounce(event){ //!!!
    var fieldInput = event.target.parentNode.querySelector(".field");

    function equal(){
        if (state.items[0] != "" && state.items[1] != ""){
            state.currentOperation(state.items[1]);
            fieldInput.value = calc.result();
            state.items[0] = calc.result();
            state.items[1] = "";
            state.currentOperation = null;
            state.currentAction = true;
            state.currentItem = 0;
          };
    };

    function setOperationState(){
        fieldInput.value += event.target.innerHTML;
        state.currentItem = 1;
        state.currentAction = false;
        state.hasDot = false;
    };

    switch (event.target.className){
        case "btn number":
          fieldInput.value += event.target.innerHTML;
          state.items[state.currentItem] += event.target.innerHTML;
          state.currentAction = true;
          break;
        case "btn add":
          equal();
          if (state.items[0] != "" && state.currentAction){
            setOperationState();
            state.currentOperation = calc.add(state.items[0]);
          };
          break;
        case "btn subtract":
          equal();
          if (state.currentAction){
            setOperationState();
            if (state.items[0] === "") {
                state.items[0] = "-";
                state.currentItem = 0;
            };
            state.currentOperation = calc.subtract(state.items[0]);
          };
          break;
        case "btn multiply":
          equal();
          if (state.items[0] != "" && state.currentAction){
            setOperationState();
            state.currentOperation = calc.multiply(state.items[0]);
          };
          break;
        case "btn divide":
          equal();
          if (state.items[0] != "" && state.currentAction){
            setOperationState();
            state.currentOperation = calc.divide(state.items[0]);
          };
          break;
        case "btn equal":
          equal();
          break;
        case "btn clear":
          calc.reset();
          fieldInput.value = "";
          state = new StartState();
          break;
        case "btn dot":
          if (state.hasDot == false){
              state.hasDot = true;
              state.items[state.currentItem] += event.target.innerHTML;
              fieldInput.value += event.target.innerHTML;
            break;
          }
      }

  }

  document.querySelectorAll(".calculator").forEach(function(el, i, arr){
    event.target.addEventListener("click", debounce);
  });

}




