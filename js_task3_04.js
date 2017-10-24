function checkIfItemHasName(someString, someObject){
    if (someString in someObject === false){
        someObject[someString] = "new";
    }
    return someObject;
}

console.log(checkIfItemHasName('c', {a:123, b:'qwerty'}));