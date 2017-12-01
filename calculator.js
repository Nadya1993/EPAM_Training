// var Calculator = function(){
//     var buffer = 0;
//     this.add = function(value1){
//         buffer += value1;
//         return function(value2){
//             if (value2){
//                 return buffer += value2;
//             }
//             else {
//                 return buffer;
//             }
//         };
//     };
//     this.subtract = function(value1){
//         buffer -= value1;
//         return function(value2){
//             if (value2){
//                 return buffer -= value2;
//             }
//             else {
//                 return buffer;
//             }
//         };
//     };
//     this.multiply = function(value1){
//         buffer *= value1;
//         return function(value2){
//             if (value2){
//                 return buffer *= value2;
//             }
//             else {
//                 return buffer;
//             }
//         };
//     };
//     this.divide = function(value1){
//         buffer /= value1;
//         return function(value2){
//             if (value2){
//                 return buffer /= value2;
//             }
//             else {
//                 return buffer;
//             }
//         };
//     };
//     this.reset = function(){
//         return buffer = 0;
//     };
//     this.result = function(){
//         return buffer;
//     };
// }

// var calc = new Calculator();
// console.log(calc.add(5)(10));
// console.log(calc.add(5)());
// console.log(calc.result());
// console.log(calc.reset());


// function CoffeeMachine(power, capacity) {
//     var waterAmount = 0;
  
//     this.waterAmount = function(amount) {
//       // вызов без параметра, значит режим геттера, возвращаем свойство
//       if (!arguments.length) return waterAmount;
  
//       // иначе режим сеттера
//       if (amount < 0) {
//         throw new Error("Значение должно быть положительным");
//       }
//       if (amount > capacity) {
//         throw new Error("Нельзя залить воды больше, чем " + capacity);
//       }
  
//       waterAmount = amount;
//     };
  
//   }
  
//   var coffeeMachine = new CoffeeMachine(1000, 500);
  
//   // пример использования
//   coffeeMachine.waterAmount(450);
//   console.log( coffeeMachine.waterAmount() ); // 450

//--------------------------------task 1-----------------------------------------------------------------------------
// function User() {
//     var firstName = "";
//     var surname = "";
//     this.getFullName = function(){
//         if ((firstName+surname).trim() != ""){
//             return "FirstName: " + firstName + ", Surname: " + surname;
//         }
//         else return "Please set the name."
//     };
//     this.setFirstName = function(fname){
//         if (typeof fname == "string"){
//             return firstName = fname;
//         }
//         else return "Please set correct first name."
//     };
//     this.setSurname = function(sname){
//         if (typeof sname == "string"){
//             return surname = sname;
//         }
//         else return "Please set correct surname."
//     };
//   }
  
//   var user = new User();
//   user.setFirstName("");
//   user.setSurname(" ");
  
//   console.log( user.getFullName() ); // Петя Иванов

//----------------------------------------task 2------------------------------------------------------------------------------
// function CoffeeMachine(power, capacity) {
//     //..
//     this.setWaterAmount = function(amount) {
//       if (amount < 0) {
//         throw new Error("Значение должно быть положительным");
//       }
//       if (amount > capacity) {
//         throw new Error("Нельзя залить воды больше, чем " + capacity);
//       }
  
//       waterAmount = amount;
//     };
  
//     this.getWaterAmount = function() {
//       return waterAmount;
//     };

//     this.getPower = function(){
//         return power;
//     }
  
//   }


// function CoffeeMachine(power, capacity) {
//     var waterAmount = 0;
  
//     var WATER_HEAT_CAPACITY = 4200;
  
//     function getTimeToBoil() {
//       return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
  
//     this.setWaterAmount = function(amount) {
//       if (amount < 0) {
//         throw new Error("Значение должно быть положительным");
//       }
//       if (amount > capacity) {
//         throw new Error("Нельзя залить больше, чем " + capacity);
//       }
  
//       waterAmount = amount;
//     };
  
//     function onReady() {
//         console.log( 'Кофе готов!' );
//     }
  
//     this.run = function() {
//       setTimeout(onReady, getTimeToBoil());
//     };

//     this.addWater = function(amount){
//         if (amount > 0 && amount <= (capacity - waterAmount)){
//             return waterAmount += amount;
//         }
//         else throw new Error("something goes wrong");
//         // this.setWaterAmount(waterAmount + amount);
//     }
  
//   }

//   var coffeeMachine = new CoffeeMachine(100000, 400);
//   coffeeMachine.addWater(200);
//   coffeeMachine.addWater(100);
//   coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
//   coffeeMachine.run();



  function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
  
    var WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.setWaterAmount = function(amount) {
      // ... проверки пропущены для краткости
      waterAmount = amount;
    };
  
    this.getWaterAmount = function(amount) {
      return waterAmount;
    };
  
    function onReady() {
        alert( 'Кофе готов!' );
      }
  
    this.run = function() {
      setTimeout(onReady, getTimeToBoil());
    };
  
  }