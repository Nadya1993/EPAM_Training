function maxItem(array) {
    var max = array[0];
    array.forEach(function(element) {
        if (element > max)
            max = element;
    }, this);
    console.log(max);
}

maxItem([11,6,8,5]);