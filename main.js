var itemList = JSON.parse(localStorage.getItem("toDoList"));
var showingState = JSON.parse(localStorage.getItem("toDoListShowState"));

function init(){
  document.querySelector(".todos_input").addEventListener('keypress', function(){
    var key = event.which || event.keyCode;
      if (key === 13){
        if (itemList == null) {
          itemList = {};
          localStorage.setItem("toDoListShowState", JSON.stringify("all"));
        };
        var id = Date.now(),
            name = this.value;
        if (name !== ""){
          itemList[id] = {"title" : name, "status" : false};
          localStorage.setItem("toDoList", JSON.stringify(itemList));
          var newItem = new ToDoItem(id);
          newItem.setItem(name, false);
          this.value = "";
          // console.log(newItem);
        };
      };
  });
};

var ToDoItem = function(id){ 
      this.id = id;
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
    
      item_status.addEventListener("click", this.changeElement().changeStatus);
      item_text.addEventListener("dblclick", this.changeElement().editName);
      item_field.addEventListener('keypress', this.changeElement().saveNewValue);
      item_delete.addEventListener("click", this.changeElement().deleteItem);
      // return item;
      delete this.id;
}

ToDoItem.prototype.setItem = function(name, status){
  this.item_text.innerHTML = name;
  this.item_status.checked = status;
};

ToDoItem.prototype.changeElement = function(){
  var id = this.id;
  return {
    changeStatus : function(){
      itemList[id]["status"] = !(itemList[id]["status"]);
      localStorage.setItem("toDoList", JSON.stringify(itemList));
    },
    deleteItem : function(){
      delete itemList[id];
      localStorage.setItem("toDoList", JSON.stringify(itemList));
      document.getElementById("wrapper").removeChild(event.target.parentNode);
    },
    editName : function(){
      this.hidden = true;
      this.nextSibling.hidden = false;
      this.nextSibling.value = this.innerHTML;
    },
    saveNewValue : function(){
      var key = event.which || event.keyCode;
      if (key === 13){
        this.previousSibling.hidden = false;
        this.hidden = true;
        if (this.value !== ""){
          itemList[id]["title"] = this.value;
          localStorage.setItem("toDoList", JSON.stringify(itemList));
          this.previousSibling.innerHTML = this.value;
          this.value = "";
        };
      };
    }
  };
}


// var ListAction = function() { // определяем возможные действия над листом
//   return {
//     add : function(item){
//       if (item){
//         var id = uuid();
//         if (itemList == null) {
//           itemList = {};
//           localStorage.setItem("toDoListShowState", JSON.stringify("all"));
//         };
//         itemList[id] = {"title" : item, "status" : false};
//         localStorage.setItem("toDoList", JSON.stringify(itemList));
//         return id;
//       }
//     },
//     setStatusAll : function(status){
//       if (typeof status == "boolean"){
//         for (key in itemList){
//           itemList[key]["status"] = status;
//         };
//         localStorage.setItem("toDoList", JSON.stringify(itemList));
//       }
//     },
//     deleteCompletedItems : function(){
//       for (key in itemList){
//         if (itemList[key]["status"] === true){
//           delete itemList[key];
//         }
//       };
//       localStorage.setItem("toDoList", JSON.stringify(itemList));
//     }
//   }
// }

// var ItemEntity = function (id){ //отрисовка задачи

//   var setStatus = function(){
//     itemList[id]["status"] = !(itemList[id]["status"]);
//     localStorage.setItem("toDoList", JSON.stringify(itemList));
//     state();
//   };
//   var deleteItem = function(){
//     delete itemList[id];
//     localStorage.setItem("toDoList", JSON.stringify(itemList));
//     wrapper.removeChild(event.target.parentNode);
//     state();
//   };
//   var editItem = function(){
//     item_text.hidden = true;
//     item_field.hidden = false;
//     item_field.value = item_text.innerHTML;
//   };

//   var saveNewValue = function(){
//     var key = event.which || event.keyCode;
//     if (key === 13){
//       item_text.hidden = false;
//       item_field.hidden = true;
//       if (item_field.value !== ""){
//         itemList[id]["title"] = item_field.value;
//         localStorage.setItem("toDoList", JSON.stringify(itemList));
//         item_text.innerHTML = item_field.value;
//         item_field.value = "";
//       }
//     }
//   };

//   var wrapper = document.getElementById("wrapper");
  
//   var item = document.createElement('div');
//   item.setAttribute("class", "item");
//   wrapper.appendChild(item);

//   var item_status = document.createElement('input');
//   item_status.setAttribute("type", "checkbox");
//   item_status.setAttribute("class", "item_status");
//   if (itemList[id]["status"]){
//      item_status.checked = true;
//   };
//   item.appendChild(item_status);

//   var item_text = document.createElement('p');
//   item_text.setAttribute("class", "item_text");
//   item_text.innerHTML = itemList[id]["title"];
//   item.appendChild(item_text);

//   var item_field = document.createElement('input');
//   item_field.setAttribute("class", "item_field");
//   item_field.hidden = true;
//   item.appendChild(item_field);

//   var item_delete = document.createElement('button');
//   item_delete.setAttribute("class", "item_delete");
//   item_delete.innerHTML = "Delete";
//   item.appendChild(item_delete);

//   item_status.addEventListener("click", setStatus);
//   item_text.addEventListener("dblclick", editItem);
//   item_field.addEventListener('keypress', saveNewValue);
//   item_delete.addEventListener("click", deleteItem);
//   return item;
// }

// var getTask = function (func){//добавление задачи в список
//   return function(){
//     var key = event.which || event.keyCode;
//     if (key === 13 && document.querySelector(".todos_input").value !== "") { 
//       var id = func(document.querySelector(".todos_input").value);
//       document.querySelector(".todos_input").value = "";
//       ItemEntity(id);
//       state();
//     }
//   }
// }

// var setStatusWrapper = function (func){ // изменение статусов задач
//   return function(){
//     var value = document.querySelector(".statusAll").checked;
//     var statuses = document.getElementsByClassName("item_status");
//     [].forEach.call(statuses, function(element) {
//       element.checked = value;
//     });
//     func(value);
//     state();
//    }
// };

// var deleteCompletedWrapper = function (func){//удаление всех законченных задач
//   return function(){
//     var wrapper = document.getElementById("wrapper");
//     var items = document.getElementsByClassName("item");
//     var counter = false;
//     while (counter === false) {
//       counter = true;
//       [].forEach.call(items, function(element) {
//         if (element.firstChild.checked){
//           wrapper.removeChild(element);
//           counter = false;
//         };
//       });
//     };
//     func();
//     state();
//    }
// };

//  var showItems = function(elem){ //выбор опции показа задач
//   return function(){
//     var items = document.getElementsByClassName("item");
//     var mode = event.target.className;
//     if (mode === undefined){
//       mode = showingState;
//     };
//     [].forEach.call(items, function(element) {
//       switch (mode){
//         case null:
//         case "all": 
//           element.style["display"] = "flex";
//           localStorage.setItem("toDoListShowState", JSON.stringify("all"));
//           break;
//         case "completed":
//           if (element.firstChild.checked === true){
//             element.style["display"] = "flex";
//           }
//           else{
//             element.style["display"] = "none";
//           };
//           localStorage.setItem("toDoListShowState", JSON.stringify("completed"));
//         break;
//         case "active":
//           if (element.firstChild.checked === true){
//             element.style["display"] = "none";
//           }
//           else{
//             element.style["display"] = "flex";
//           };
//           localStorage.setItem("toDoListShowState", JSON.stringify("active"));
//         break;
//       }
//     });
//     showButtonsState();
//    }
//  }

// function init(){
//   var elem = new ListAction();
//   for (key in itemList){
//     ItemEntity(key);
//   }
//   showButtonsState();
//   var showOption = showItems(elem);
//   showOption();
//   state();
//   var askingTask = getTask(elem.add);
//   document.addEventListener('keypress', askingTask);

//   var setStatus = setStatusWrapper(elem.setStatusAll);
//   document.querySelector(".statusAll").addEventListener("click", setStatus);

//   document.querySelector("#infoButtons").addEventListener("click", showOption);

//   var deleteCompleted = deleteCompletedWrapper(elem.deleteCompletedItems);
//   document.querySelector("#delete").addEventListener("click", deleteCompleted);
// }

// // controller
// var state = function(){ 
//   var items = JSON.parse(localStorage.getItem("toDoList"));
//   var done = 0;
//   var all = 0;
//   for (key in items){
//     if (items[key]["status"] === true ){
//       done++;
//     }
//     all++;
//   };
//   var left = all - done;
//   if (left == 0 && all !== 0){
//     document.querySelector(".statusAll").checked = true;
//   }
//   else {
//     document.querySelector(".statusAll").checked = false;
//   }
//   document.querySelector("#undone").innerHTML = "Active tasks: " + left;
// };

//  //controller
//  function showButtonsState(){
//   switch(JSON.parse(localStorage.getItem("toDoListShowState"))){
//    case "all":
//      document.querySelector(".all").checked = true;
//      break;
//    case "active":
//      document.querySelector(".active").checked = true;
//      break;
//    case "completed":
//      document.querySelector(".completed").checked = true;
//      break;
//   }
// }
