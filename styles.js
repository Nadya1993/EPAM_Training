var styleObject = {
    body : {
    margin: '0px',
    position: "relative"
  }
}

var pageBody = document.getElementsByTagName('body');

for(var key in styleObject["body"]){
    pageBody.style[key] = pageBody[key];
}


