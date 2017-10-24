//Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе 
//переданного объекта (объект создать заранее через Object.create())
function findProtoProp(prop, someObj){
    if (someObj.hasOwnProperty(prop) == false){
        if (prop in someObj){
            return someObj[prop];
        }
        else{
            return "no prototype prop";
        } 
    }
    else{
        return "own prop";
    } 
}

var obj1 = {a:1, b:2};
var obj2 = Object.create(obj1);
obj2.c = 3;
console.log(findProtoProp("d", obj2));
//obj2.a=8;
//console.log(obj2.a);//==8!!!

//Написать функцию, которая создает пустой объект, но без прототипа
function createEmptyObj(){
    return {};
}

var emptyObj = createEmptyObj();
emptyObj.qwerty = 45;
console.log(emptyObj.qwerty);