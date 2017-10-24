//n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
function checkIfSimpleOrCompound(num) {
    if (num > 1000 || num < 1)
        console.log("Введите корректные данные - число должно быть больше 1 и меньше 1000.");
    else {
        var compound = false;
        for (var i=2; i<num; i++){
            if (num%i == 0 && i != num) {
                compound = true;
                break;
            }
        }
        if (compound) console.log("Число " + num + " - составное число.");
            else console.log("Число " + num + " - простое число.");
    } 
}

checkIfSimpleOrCompound([1000]);