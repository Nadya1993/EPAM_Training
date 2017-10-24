function countItems(array) {
    array.forEach(function(element) {
        console.log(element);
    }, this);
    console.log(array.length);
}

countItems([1,6,8,5]);