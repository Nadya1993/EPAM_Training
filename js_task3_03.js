function showItemWithName(someString, someObject){
    if (someString in someObject){ //&& someObject[someString] !== undefined){
        return true;
    }
    else {
        return false;
    }
}

console.log(showItemWithName('c', {a:123, b:'qwerty'}));