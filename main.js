
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
  localStorage.setItem("toDoList", '[]');
  var itemArr = JSON.parse(localStorage["toDoList"]);
  return {
    add : function(item){
      alert(item)
      itemArr.push({"id" : uuid(), "title" : item, "status" : 0});
      localStorage.setItem("toDoList", JSON.stringify(itemArr));
    },
    selectAll : function(){
      itemArr.forEach(function(element) {
        element.status = 1;
      });
    },
    unselectAll : function(){
      itemArr.forEach(function(element) {
        element.status = 0;
      });
    }
  }
}

// var elem = new ListAction();
// elem.add("qqq");
// elem.add("222");



function deb(func, value){
   return function(){
     alert(func)
     alert(value)
    return func(value);
   }
}


function init(){
  var elem = new ListAction();
  function f(){
    alert(document.querySelector(".input").value)
  }
  var askingDebounce = deb(elem.add, document.querySelector(".input").value);
  document.querySelector(".add").addEventListener("click", askingDebounce);
  document.querySelector(".add").addEventListener("click", f);
}

