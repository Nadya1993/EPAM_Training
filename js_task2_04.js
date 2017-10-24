function checkIfEqual(array) {
    var result;
    for (var i=1; i<array.length; i++){
        if (array[i] == array[i-1])
            result = true;
        else {
            result = false;
            break;
        }
    };
    console.log(result);
}

checkIfEqual([1,1,1,1]);