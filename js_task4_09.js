function countSymbols(someString){
    var stringObj = {};
    var currentSymbol;
    while (someString) {
        currentSymbol = someString[0];
        var reg = new RegExp(currentSymbol, 'gi');
        stringObj[currentSymbol] = someString.match(reg).length;
        while (someString.indexOf(currentSymbol)!=-1){
            someString = someString.replace(currentSymbol, "");
        }
    }
    return stringObj;
}

console.log(countSymbols("free code camp"));