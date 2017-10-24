function showItems(someObject){
    for (var key in someObject){
        console.log("key = " + key + "; value = " + someObject[key])
    }
}

showItems({a:123, b:'qwerty'});