function toUp(someString){
    return (someString.charAt(0).toUpperCase() + someString.substring(1));
}

function eachWordToUppercase(someString){
    var words = someString.split(" ");
    words = words.map(function(element) {
        return toUp(element);
    });
    return words.join(" ");
}

console.log(eachWordToUppercase("free code camp"));