function createNewObj(someObj){
    var newObj = {};
    for (var key in someObj){
        newObj[key] = someObj[key];
    }
    console.log("newObj === someObj? " + (newObj === someObj));
    return (newObj);
}

console.log(createNewObj({"a":123}));