function deepClone(someObj){
    var newObj = {};
    for (var key in someObj){
        if (typeof someObj[key] !== "object"){
            newObj[key] = someObj[key];
            console.log("non obj");
        }
        else{
            newObj[key] = deepClone(someObj[key]);
            console.log("obj");
        }
    }
    //console.log("newObj === someObj? " + (newObj === someObj));
    return (newObj);
}

console.log(deepClone({"a":123, b:{q:34, w: 56}}));