var styleObject = {
    body : {
    margin: '0px',
    position: "relative",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
  },
  "menu-content":{
    display: "flex"
  }
}

function loadingStyles(){
    var pageBody = document.getElementsByTagName("body");
    for(var key in styleObject.body){
        pageBody[0].style[key] = styleObject.body[key];
    }    

    
var menu = document.getElementsByClassName("menu-content");
menu.addEventListener('click', function(){
    menu.style.display = styleObject["menu-content"].display;
});
}






