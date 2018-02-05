var itemList = JSON.parse(localStorage.getItem("toDoList"));
var viewingMode = JSON.parse(localStorage.getItem("toDoListShowState"));

function init(){
  "use strict"; 
  if (itemList === null) {
    itemList = {};
    localStorage.setItem("toDoListShowState", JSON.stringify("all"));
    viewingMode = JSON.parse(localStorage.getItem("toDoListShowState"));
  }
  else{
    for (var key in itemList){
      var newItem = new ToDoItem(key);
      newItem.setItem(itemList[key]["title"], itemList[key]["status"]);
    }
  };

  undoneItems();
  setViewingMode(viewingMode);

  document.querySelector("#infoButtons").addEventListener("click", function(){
    if (event.target.nodeName === "INPUT"){
      setViewingMode(event.target.className);
    };
  });

  document.querySelector(".statusAll").addEventListener("click", function(){
    var items = document.getElementsByClassName("item_status"),
        value = this.checked;
    for (var key in itemList){
      itemList[key]["status"] = value;
    };
    [].forEach.call(items, function(elem){
      elem.checked = value;
    });
    localStorage.setItem("toDoList", JSON.stringify(itemList));
    undoneItems();
    setViewingMode(JSON.parse(localStorage.getItem("toDoListShowState")));
  });

  document.querySelector(".todos_input").addEventListener('keypress', function(){
    var key = event.which || event.keyCode;
      if (key === 13){
        var id = Date.now(),
            name = this.value;
        if (name !== ""){
          itemList[id] = {"title" : name, "status" : false};
          localStorage.setItem("toDoList", JSON.stringify(itemList));
          var newItem = new ToDoItem(id);
          newItem.setItem(name, false);
          this.value = "";
          undoneItems();
          setViewingMode(JSON.parse(localStorage.getItem("toDoListShowState")));
        };
      };
  });

  document.querySelector("#deleteCompleted").addEventListener("click", function(){
    var wrapper = document.getElementById("wrapper");
    var items = document.getElementsByClassName("item");
    var counter = false;
    while (counter === false) {
      counter = true;
      for (var key in itemList){
        if (itemList[key]["status"]) {
          delete itemList[key];
        };
      };
      for (var key in items){
        if (items.hasOwnProperty(key) && items[key].firstChild.checked) {
          console.log(items[key]);
          counter = false;
          wrapper.removeChild(items[key]); 
        };
      };
    };
    localStorage.setItem("toDoList", JSON.stringify(itemList));
    undoneItems();
  });
};

var ToDoItem = function(id){ 
  var item = document.createElement('div');
  item.setAttribute("class", "item");
  document.getElementById("wrapper").appendChild(item);

  var item_status = document.createElement('input');
  item_status.setAttribute("type", "checkbox");
  item_status.setAttribute("class", "item_status");
  item.appendChild(item_status);
  this.item_status = item_status;

  var item_text = document.createElement('p');
  item_text.setAttribute("class", "item_text");
  item.appendChild(item_text);
  this.item_text = item_text;

  var item_field = document.createElement('input');
  item_field.setAttribute("class", "item_field");
  item_field.hidden = true;
  item.appendChild(item_field);
  this.item_field = item_field;

  var item_delete = document.createElement('button');
  item_delete.setAttribute("class", "item_delete");
  item_delete.innerHTML = "Delete";
  item.appendChild(item_delete);

  var self = this;

  item_status.addEventListener("click", function(){
    return self.changeStatus(id);
  });
  item_text.addEventListener("dblclick", function(){
    return self.editName(this);
  });
  item_field.addEventListener('keypress',  function(){
    return self.saveNewValue(id, this);
  });
  item_delete.addEventListener("click",  function(){
    return self.deleteItem(id);
  });
};

ToDoItem.prototype = {
    constructor : ToDoItem,
    setItem : function(name, status){
      this.item_text.innerHTML = name;
      this.item_status.checked = status;
    },
    changeStatus : function(id){
      itemList[id]["status"] = !(itemList[id]["status"]);
      localStorage.setItem("toDoList", JSON.stringify(itemList));
      undoneItems();
      setViewingMode(JSON.parse(localStorage.getItem("toDoListShowState")));
    },
    deleteItem : function(id){
      delete itemList[id];
      localStorage.setItem("toDoList", JSON.stringify(itemList));
      document.getElementById("wrapper").removeChild(event.target.parentNode);
      undoneItems();
    },
    editName : function(elem){
      elem.hidden = true;
      elem.nextSibling.hidden = false;
      elem.nextSibling.value = elem.innerHTML;
    },
    saveNewValue : function(id, elem){
      var key = event.which || event.keyCode;
      if (key === 13){
        elem.previousSibling.hidden = false;
        elem.hidden = true;
        var newName = elem.value;
        if (newName !== ""){
          itemList[id]["title"] = newName;
          localStorage.setItem("toDoList", JSON.stringify(itemList));
          elem.previousSibling.innerHTML = newName;
          elem.value = "";
        };
      };
    }  
  };

  // controller
function undoneItems(){ 
  var left = 0,
      all = Object.keys(itemList).length,
      mainCheckbox = document.querySelector(".statusAll");
  for (key in itemList){
    if (itemList[key]["status"] === false ){
      left++;
    };
  };
  document.querySelector("#undone").innerHTML = "Active tasks: " + left;
  if (left == 0 && all !== 0){
    mainCheckbox.checked = true;
  } else {
    mainCheckbox.checked = false;
  };
};

//controller
function setViewingMode(mode){
  var items = document.getElementsByClassName("item");
  if (mode) document.querySelector("." + mode).checked = true;
  localStorage.setItem("toDoListShowState", JSON.stringify(mode));
  switch (mode){
    case null:
    case "all": 
      [].forEach.call(items, function(elem){
        elem.style["display"] = "flex";
      });
      break;
    case "completed":
      [].forEach.call(items, function(elem){
        if (elem.firstChild.checked === true){
          elem.style["display"] = "flex";
        } else {
          elem.style["display"] = "none";
        };
      });
    break;
    case "active":
      [].forEach.call(items, function(elem){
        if (elem.firstChild.checked === true){
          elem.style["display"] = "none";
        } else {
          elem.style["display"] = "flex";
        };
      });
    break;
  };
};
