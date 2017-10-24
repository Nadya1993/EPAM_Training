function evenOddCounter(array) {
    var even = 0;
    var odd = 0;
    var zero = 0;
    array.forEach(function(element) {
        if (element == 0)
            zero++;
        else if (element%2 == 0)
            even++;
        else if (element%2 == 1)
            odd++;
    }, this);
    if (zero > 0)
        console.log("четных: " + even + "; нечетных: " + odd + "; нуль: " + zero);
    else console.log("четных: " + even + "; нечетных: " + odd);
}

evenOddCounter([1,6,8,5,0]);