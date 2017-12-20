
  // var result;
function getUuid() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'uuid', true);
  xhr.onreadystatechange = function(result) {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      return;
    }
    //alert(xhr.responseText)
    // result = xhr.responseText;
    localStorage.setItem("toDoList", xhr.responseText);
  }
  xhr.send(null);
}

getUuid()





// function ListAction() {
//   localStorage.setItem("toDoList", '[]');
//   return {
//     add : function(item){
//       console.log(JSON.stringify({"id" : getUuid(), "title" : item, "status" : 0}));
//       getUuid();
//       console.log("1"+result)
//       JSON.parse(localStorage["toDoList"]).push(JSON.stringify({"id" : getUuid(), "title" : item, "status" : 0}));
//     }//,
//     // check : function(item){
//     //   localStorage.item = 1;
//     // },
//     // uncheck : function(item){
//     //   localStorage.item = 0;
//     // },
//     // selectAll : function(){
//     //   for (key in localStorage){
//     //     localStorage[key] = 1;
//     //   }
//     // },
//     // unselectAll : function(){
//     //   for (key in localStorage){
//     //     localStorage[key] = 0;
//     //   }
//     // },
//     // showActive : function(){
//     //   var active = {};
//     //   for (key in localStorage){
//     //     if (localStorage[key] == 1){
//     //       active[key] = 1;
//     //     }
//     //   };
//     //   return active;
//     // },
//     // showInActive : function(){
//     //   var inActive = {};
//     //   for (key in localStorage){
//     //     if (localStorage[key] == 0){
//     //       inActive[key] = 0;
//     //     }
//     //   };
//     //   return inActive;
//     // }

//   }
// }

// var elem = new ListAction();
// elem.add("qqq");
// elem.add("yyy")
// console.log
