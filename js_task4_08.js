function reverseString(someString){
    var reverse = "";
    for (var i = someString.length-1; i >= 0; i--){
        reverse += someString[i];
    }
    return reverse;
}

console.log(reverseString("camp"));