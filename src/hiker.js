import { HungryBear } from './../src/hungry-bear.js';

export class Hiker {

  constructor(name) {
    this.name = name;
    this.alive = true;
  }

  // areYouDead() {
  //   if (HungryBear.foodLevel > 0) {
  //     this.alive = true;
  //   } else {
  //     this.alive = false;
  //   }
  // }

  areYouDead() {
    if (HungryBear.foodLevel === 0) {
      return this.alive = false;
    } else {
      return this.alive = true;
    }
  }

}
