function pasteThePart(someString, part, pos){
    var words = someString.split(" ");
    words.splice(pos, 0, part);
    return words.join(" ");
}

console.log(pasteThePart("free camp", "code", 1));