var a = 0.1, b=0.2;
console.log(a+b == 0.3)

var user = {
  name: "Вася"
};

var user2 = Object.create(user);
// user2.name = "uuu";

console.log(user);
console.log(user2);

// console.log(user.__proto__);
// console.log(user2.__proto__);


// user2.__proto__.name = "ZZZ";
// console.log(user2);
// console.log(user2.__proto__);



// function uuid() {
//   var uuid = "", i, random;
//   for (i = 0; i < 32; i++) {
//     random = Math.random() * 16 | 0;
//     if (i == 8 || i == 12 || i == 16 || i == 20) {
//       uuid += "-"
//     }
//     uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
//   }
//   return uuid;
// }

// var itemList = JSON.parse(localStorage.getItem("toDoList"));
// var showingState = JSON.parse(localStorage.getItem("toDoListShowState"));

// var ListAction = function() { // определяем возможные действия над листом
//   this.add = function(item){
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
//     };
//   this.setStatusAll = function(status){
//       if (typeof status == "boolean"){
//         for (key in itemList){
//           itemList[key]["status"] = status;
//         };
//         localStorage.setItem("toDoList", JSON.stringify(itemList));
//       }
//     };
//   this.deleteCompletedItems = function(){
//       for (key in itemList){
//         if (itemList[key]["status"] === true){
//           delete itemList[key];
//         }
//       };
//       localStorage.setItem("toDoList", JSON.stringify(itemList));
//     }
//   };


// var ItemEntity = function (id){ //отрисовка задачи
//   var wrapper = document.getElementById("wrapper");
//   var item = document.createElement('div');
//   item.id = id;
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
//   return item;
// }

// var getTask = function (setIDfunc){//добавление задачи в список
//   return function(){
//     var key = event.which || event.keyCode;
//     if (key === 13 && document.querySelector(".todos_input").value !== "") { 
//       var id = setIDfunc(document.querySelector(".todos_input").value);
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
//     var item = ItemEntity(key);
//   };
  
//   var wrapper = document.getElementById("wrapper");
//   wrapper.addEventListener('click', function(){
//     if (event.target.parentNode.className === "item"){
//       var item = event.target.parentNode;
//       switch (event.target.className){
//         case "item_status" : 
//           itemList[item.id]["status"] = !(itemList[item.id]["status"]);
//           break;
//         case "item_delete" : 
//           delete itemList[item.id];
//           this.removeChild(item);
//           break;
//       };
//       localStorage.setItem("toDoList", JSON.stringify(itemList));
//       state();
//     };
//   });
//   wrapper.addEventListener('dblclick', function(){
//     if (event.target.className === "item_text"){
//       var item = event.target.parentNode,
//        item_field = item.querySelector(".item_field"),
//        item_text = item.querySelector(".item_text");
//       event.target.hidden = true;
//       item_field.hidden = false;
//       item_field.value = item_text.innerHTML;
//     };
//   });

//   wrapper.addEventListener('keypress', function(){
//     if (event.target.className === "item_field"){
//       var item = event.target.parentNode,
//         item_field = item.querySelector(".item_field"),
//         item_text = item.querySelector(".item_text"),
//         key = event.which || event.keyCode;
//       if (key === 13){
//         item_text.hidden = false;
//         item_field.hidden = true;
//         if (item_field.value !== ""){
//           itemList[event.target.parentNode.id]["title"] = item_field.value;
//           localStorage.setItem("toDoList", JSON.stringify(itemList));
//           item_text.innerHTML = item_field.value;
//           item_field.value = "";
//         }
//     };
//   };
//   });

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
