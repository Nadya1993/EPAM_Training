function getType(item) {
    var result;
    if (typeof item == "string")
        result = "Это строка";
        else if (typeof item == "number")
        result = "Это число";
        else result = "Это не строка и не число";
        console.log(result);
}

//getType("2");
console.log(parseInt("0234", 10));