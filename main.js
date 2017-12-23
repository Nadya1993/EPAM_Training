
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
  var itemArr = JSON.parse(localStorage.getItem("toDoList"));
  if (itemArr === null) {
    localStorage.setItem("toDoList", '{}');
  };
  return {
    add : function(item){
      if (item){
        var id = uuid();
        itemArr[id] = {"title" : item, "status" : false};
        localStorage.setItem("toDoList", JSON.stringify(itemArr));
        return id;
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

function drawTask(id){
  var itemArr = JSON.parse(localStorage.getItem("toDoList"));
  var wrapper = document.getElementById("wrapper");
  var item = document.createElement('div');
  item.setAttribute("class", "item");
  wrapper.appendChild(item);

  var item_status = document.createElement('input');
  item_status.setAttribute("type", "checkbox");
  item_status.setAttribute("id", itemArr[id]);
  item_status.setAttribute("class", "item_status");
   if (itemArr[id]["status"]){
     item_status.setAttribute("checked", true);
   };
  item.appendChild(item_status);

  var item_text = document.createElement('p');
  item_text.setAttribute("class", "item_text");
  item_text.innerHTML = itemArr[id]["title"];
  item.appendChild(item_text);
}


var addTask = function(item_id){
  var id = arguments[0];
  if (id){
    drawTask(id);
  }
  else{
    var itemArr = JSON.parse(localStorage.getItem("toDoList"));
    for (key in itemArr){
      drawTask(key);
    }
  }
}


var getTask = function (func){
  return function(){
    var key = event.which || event.keyCode;
    if (key === 13) { 
      var id = func(document.querySelector(".todos_input").value);
      document.querySelector(".todos_input").value = "";
      drawTask(id);
    }
  }
}

var changeTaskStatus = function (func){
  return function(){
    



    
  }
}



var getTask1 = function (func){
  return function(){
    return func();
   }
}

function init(){
  var elem = new ListAction();
  addTask();
  var askingTask = getTask(elem.add);
  document.addEventListener('keypress', askingTask);





  document.querySelector(".wrapper")







  var askingID = getTask1(elem.deleteAllItems);
  document.querySelector(".idd").addEventListener("click", askingID);
}

