// This is the new code after completing this lesson:
// https://www.learnhowtoprogram.com/javascript/asynchrony-and-apis/further-exploration-with-closures-in-javascript

// START OF NEW CODE

export let bear = {
  foodLevel: 10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount;
      return `The bear ate the ${food}! Food level goes up ${amount}!`;
    }
  }
};

// This is supposed to go somewhere but doesn't work:
// bear.eatSmall = bear.feed(5);

//END OF NEW CODE

// The code below is what the file looked like after completing this lesson:
// https://www.learnhowtoprogram.com/javascript/asynchrony-and-apis/exploring-asynchrony-with-setinterval-and-settimeout
//
//START OF OLD CODE
//
// export class HungryBear {
//
//   constructor(name) {
//     this.name = name;
//     this.foodLevel = 10;
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//
//   didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   feed() {
//     this.foodLevel = 10;
//   }
// }
//
// END OF OLD CODE
