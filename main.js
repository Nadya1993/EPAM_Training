//AIzaSyCHQreOyVTeIunKEZIFzCCCrrTdO_Af8hk
function ListAction() {
  return {
    add : function(item){
      localStorage.setItem(item, 0);
    },
    check : function(item){
      localStorage.item = 1;
    },
    uncheck : function(item){
      localStorage.item = 0;
    },
    selectAll : function(){
      for (key in localStorage){
        localStorage[key] = 1;
      }
    },
    unselectAll : function(){
      for (key in localStorage){
        localStorage[key] = 0;
      }
    },
    showActive : function(){
      var active = {};
      for (key in localStorage){
        if (localStorage[key] == 1){
          active[key] = 1;
        }
      };
      return active;
    },
    showInActive : function(){
      var inActive = {};
      for (key in localStorage){
        if (localStorage[key] == 0){
          inActive[key] = 0;
        }
      };
      return inActive;
    },

  }
}
