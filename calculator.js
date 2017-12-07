//если с последнего клика прошло 0.5 сек, то происходит чудо иначе нет

//debounce (a, b) //a ф-я, b - таймаут, еще научиться отключать 



function funcForTimeOut(){
    console.log("Text from function for timeout");
}

function debounce(func, timeout){
    var timeID;
    return function(){
        var handler = function(){
            func();
            timeID = null;
        }
        clearTimeout(timeID);
        timeID = setTimeout(handler, timeout);
        return;
    }
}



//


var askingDebounce = debounce(funcForTimeOut, 1000);


function init(){
    document.querySelector(".new").addEventListener("click", askingDebounce);
}





