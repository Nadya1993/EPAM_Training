function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

console.log(getRandom(0, 100));