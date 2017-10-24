function toUp(someString){
    return (someString.charAt(0).toUpperCase() + someString.substring(1));
}

function camelCase(someString){
    var words = someString.split(' ');
    words = words.map(function(element) {
        return toUp(element);
    });
    someString = words.join('');
    return (someString.charAt(0).toLowerCase() + someString.substring(1));
}

console.log(camelCase("free Code camp"));
