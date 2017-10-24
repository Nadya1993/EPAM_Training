function truncateString(someString, lengthValue){
    if (someString.length > lengthValue){
        someString = someString.substring(0, lengthValue) + "...";
    }
    return someString;
}


console.log(truncateString("free code camp", 9));