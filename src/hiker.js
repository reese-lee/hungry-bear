import { HungryBear } from './../src/hungry-bear.js';

export class Hiker {

  constructor(name) {
    this.name = name;
    this.alive = true;
    this.backpack =
    {"trailMix": 5 , "granolaBar": 3, "peanutButterSandwich": 3, "bodyParts": 4};
  }

  trailMixAmount() {
    var trailMixButton = document.getElementById("trailMixButton");
    trailMixButton.disabled = false;
    if(this.backpack["trailMix"] === 1) {
      trailMixButton.disabled = true;
    }
  }
  granolaBarAmount(){
    var granolaBarButton = document.getElementById("granolaBarButton");
    granolaBarButton.disabled = false;
    if(this.backpack["granolaBar"] === 1) {
      granolaBarButton.disabled = true;
    }
  }
  peanutButterSandwichAmount() {
    var peanutButterSandwichButton = document.getElementById("peanutButterSandwichButton");
    peanutButterSandwichButton.disabled = false;
    if(this.backpack["peanutButterSandwich"] === 1) {
      peanutButterSandwichButton.disabled = true;
    }
  }
  bodyPartAmount() {
    var bodyPartButton = document.getElementById("bodyPartButton");
    bodyPartButton.disabled = false;
    if(this.backpack["bodyParts"] === 1) {
      bodyPartButton.disabled = true;
    }
  }

  areYouDead() {
    if (HungryBear.foodLevel === 0) {
      return this.alive = false;
    } else {
      return this.alive = true;
    }
  }

}
