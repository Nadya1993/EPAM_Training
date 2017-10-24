function rounder(a, b){
    return Math.round((a+b)*1000)/1000;
}

console.log(rounder(3.455, 4.55));
console.log(typeof rounder(3.455, 4.55));