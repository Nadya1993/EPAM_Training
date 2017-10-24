var object1 = {};
object1.key1 = 1;
object1.key2 = "12";
object1.key3 = undefined;
object1.key4 = {a:1, b:2};

delete object1.key2;
console.log (object1.key2);
console.log (object1.key4);