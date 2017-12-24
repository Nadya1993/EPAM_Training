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

var itemList = JSON.parse(localStorage.getItem("toDoList"));
var showingState = JSON.parse(localStorage.getItem("toDoListShowState"));

var ListAction = function() { // определяем возможные действия над листом
  return {
    add : function(item){
      if (item){
        var id = uuid();
        if (itemList == null) {
          itemList = {};
          localStorage.setItem("toDoListShowState", JSON.stringify("all"));
        };
        itemList[id] = {"title" : item, "status" : false, "shown" : 1};
        localStorage.setItem("toDoList", JSON.stringify(itemList));
        return id;
      }
    },
    setStatusAll : function(status){
      if (typeof status == "boolean"){
        for (key in itemList){
          itemList[key]["status"] = status;
        };
        localStorage.setItem("toDoList", JSON.stringify(itemList));
      }
    },
    deleteCompletedItems : function(){
      for (key in itemList){
        if (itemList[key]["status"] === true){
          delete itemList[key];
        }
      };
      localStorage.setItem("toDoList", JSON.stringify(itemList));
    },
    showAll : function(){
      for (key in itemList){
        itemList[key]["shown"] = 1;
      };
      localStorage.setItem("toDoList", JSON.stringify(itemList));
      localStorage.setItem("toDoListShowState", JSON.stringify("all"));
    },
    showCompleted : function(){
      if (itemList[key][status] === true){
        itemList[key]["shown"] = 0;
      }
      else{
        itemList[key]["shown"] = 1;
      }
      localStorage.setItem("toDoList", JSON.stringify(itemList));
      localStorage.setItem("toDoListShowState", JSON.stringify("completed"));
    },
    showActive : function(){
      if (itemList[key][status] !== true){
        itemList[key]["shown"] = 1;
      }
      else{
        itemList[key]["shown"] = 0;
      }
      localStorage.setItem("toDoList", JSON.stringify(itemList));
      localStorage.setItem("toDoListShowState", JSON.stringify("active"));
    }
  }
}

var ItemEntity = function (id){ //отрисовка задачи
  var id = id;
  var setStatus = function(){
    itemList[id]["status"] = !(itemList[id]["status"]);
    localStorage.setItem("toDoList", JSON.stringify(itemList));
    state();
  };
  var deleteItem = function(){
    delete itemList[id];
    localStorage.setItem("toDoList", JSON.stringify(itemList));
    wrapper.removeChild(event.target.parentNode);
    state();
  };
  var wrapper = document.getElementById("wrapper");
  
  var item = document.createElement('div');
  item.setAttribute("class", "item");
  wrapper.appendChild(item);

  var item_status = document.createElement('input');
  item_status.setAttribute("type", "checkbox");
  item_status.setAttribute("id", this.id);
  item_status.setAttribute("class", "item_status");
  if (itemList[id]["status"]){
     item_status.checked = true;
  };
  item.appendChild(item_status);

  var item_text = document.createElement('p');
  item_text.setAttribute("class", "item_text");
  item_text.innerHTML = itemList[id]["title"];
  item.appendChild(item_text);

  var item_delete = document.createElement('button');
  item_delete.setAttribute("class", "item_delete");
  item_delete.innerHTML = "Delete";
  item.appendChild(item_delete);

  item_status.addEventListener("click", setStatus);
  item_delete.addEventListener("click", deleteItem);
  return item;
}

var getTask = function (func){//добавление задачи в список
  return function(){
    var key = event.which || event.keyCode;
    if (key === 13 && document.querySelector(".todos_input").value !== "") { 
      var id = func(document.querySelector(".todos_input").value);
      document.querySelector(".todos_input").value = "";
      ItemEntity(id);
      state();
    }
  }
}

var setStatusWrapper = function (func){ // изменение статусов задач
  return function(){
    var value = document.querySelector(".statusAll").checked;
    var statuses = document.getElementsByClassName("item_status");
    [].forEach.call(statuses, function(element) {
      element.checked = value;
    });
    func(value);
    state();
   }
};

var deleteCompletedWrapper = function (func){//удаление всех законченных задач
  return function(){
    var wrapper = document.getElementById("wrapper");
    var items = document.getElementsByClassName("item");
    var counter = false;
    while (counter === false) {
      counter = true;
      [].forEach.call(items, function(element) {
        if (element.firstChild.checked){
          wrapper.removeChild(element);
          counter = false;
        };
      });
    };
    func();
    state();
   }
};

 var showItems = function(elem){ //выбор опции показа задач
  return function(){
    var items = document.getElementsByClassName("item");
    var mode = event.target.className;
    if (mode === undefined){
      mode = showingState
    };
    [].forEach.call(items, function(element) {
      switch (mode){
        case "all": 
          element.style["display"] = "flex";
          elem.showAll();
          break;
        case "completed":
          if (element.firstChild.checked === true){
            element.style["display"] = "flex";
          }
          else{
            element.style["display"] = "none";
          }
          elem.showCompleted();
        break;
        case "active":
          if (element.firstChild.checked === true){
            element.style["display"] = "none";
          }
          else{
            element.style["display"] = "flex";
          }
          elem.showActive();
        break;
      }
    });
    showButtonsState();
   }
 }

function init(){
  var elem = new ListAction();
  for (key in itemList){
    ItemEntity(key);
  }
  showButtonsState();
  var showOption = showItems(elem);
  showOption(elem);
  state();
  var askingTask = getTask(elem.add);
  document.addEventListener('keypress', askingTask);

  var setStatus = setStatusWrapper(elem.setStatusAll);
  document.querySelector(".statusAll").addEventListener("click", setStatus);

  document.querySelector("#infoButtons").addEventListener("click", showOption);

  var deleteCompleted = deleteCompletedWrapper(elem.deleteCompletedItems);
  document.querySelector("#delete").addEventListener("click", deleteCompleted);
}

// controller
var state = function(){ 
  var items = JSON.parse(localStorage.getItem("toDoList"));
  var done = 0;
  var all = 0;
  for (key in items){
    if (items[key]["status"] === true ){
      done++;
    }
    all++;
  };
  var left = all - done;
  if (left == 0 && all !== 0){
    document.querySelector(".statusAll").checked = true;
  }
  else {
    document.querySelector(".statusAll").checked = false;
  }
  document.querySelector("#undone").innerHTML = "Active tasks: " + left;
};

 //controller
 function showButtonsState(){
  switch(JSON.parse(localStorage.getItem("toDoListShowState"))){
   case "all":
     document.querySelector(".all").checked = true;
     document.querySelector(".active").checked = false;
     document.querySelector(".completed").checked = false;
     break;
   case "active":
     document.querySelector(".all").checked = false;
     document.querySelector(".active").checked = true;
     document.querySelector(".completed").checked = false;
     break;
   case "completed":
     document.querySelector(".all").checked = false;
     document.querySelector(".active").checked = false;
     document.querySelector(".completed").checked = true;
     break;
  }
}
