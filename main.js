
function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}


function ListAction() {
  localStorage.setItem("toDoList", '{}');
  var itemArr = JSON.parse(localStorage.getItem("toDoList"));
  return {
    add : function(item){
      if (item){
        itemArr[uuid()] = {"title" : item, "status" : false};
        localStorage.setItem("toDoList", JSON.stringify(itemArr));
      }
    },
    setStatusAll : function(status){
      if (typeof status == "boolean"){
        for (key in itemArr){
          itemArr[key]["status"] = status;
        };
        localStorage.setItem("toDoList", JSON.stringify(itemArr));
      }
    },
    setStatus : function(id){
      itemArr[id]["status"] = !(itemArr[id]["status"]);
      localStorage.setItem("toDoList", JSON.stringify(itemArr));
    },
    deleteItem : function(id){
      delete itemArr[id];
      localStorage.setItem("toDoList", JSON.stringify(itemArr));
    },
    deleteAllItems : function(){
      for (key in itemArr){
        delete itemArr[key];
      };
      localStorage.setItem("toDoList", JSON.stringify(itemArr));
    }
  }
}

var getTask = function (func){
  return function(){
    var key = event.which || event.keyCode;
    if (key === 13) { 
      return func(document.querySelector(".todos_input").value);
    }
  }
}

var getTask1 = function (func){
  return function(){
    return func();
   }
}
  


function init(){
  var elem = new ListAction();
  var askingTask = getTask(elem.add);
  document.addEventListener('keypress', askingTask);
  var askingID = getTask1(elem.deleteAllItems);
  document.querySelector(".idd").addEventListener("click", askingID);
}

