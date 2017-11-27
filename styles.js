var styleObject = {
    body : {
    margin: '0px',
    position: "relative",
    fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
  },
  "menu-content" : {
    "display": "flex",
    "flex-direction": "column",
    "background-color": "#FFFFE0",
    "min-width": "280px",
    "margin-top": "5px",
    "box-shadow": "0px 8px 16px 0px rgba(0,0,0,0.2)"
  }
}

function hoverMenuItem(event) {
    this.style.backgroundColor = "#FFDAB9";
    if (event.relatedTarget.className != "menu" && 
        event.relatedTarget.className != "menu-btn" &&
        event.relatedTarget.id != "menu"){
        event.relatedTarget.style.background = "#FFFFE0";
    }
}

function clickMenuItem(event) {
    var color = "#FFDAB9";
    if (event.type == "mousedown")
        color = "#FFE4C4";
    this.style.backgroundColor = color;
}



function loadingStyles(){
    var pageBody = document.getElementsByTagName("body");
    for(var key in styleObject.body){
        pageBody[0].style[key] = styleObject.body[key];
    }   
    var menu = document.getElementsByClassName("menu-content");
    menu[0].style.display = "none";
    var link = document.getElementsByTagName("a"); //element.get.... не работает
    [].forEach.call(link, function(item){
        item.style.background = "#FFFFE0";
    });
}

function menuShow(){
    var menu = document.getElementsByClassName("menu-content");
    for(var key in styleObject["menu-content"]){
        menu[0].style[key] = styleObject["menu-content"][key];
    }
    
    var link = document.getElementsByTagName("a"); //element.get.... не работает
    [].forEach.call(link, function(item){
        item.addEventListener("mouseover", hoverMenuItem);
        item.addEventListener("mousedown", clickMenuItem);
        item.addEventListener("mouseup", clickMenuItem);
    });
}








