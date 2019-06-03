// This is the new code after completing this lesson:
// https://www.learnhowtoprogram.com/javascript/asynchrony-and-apis/further-exploration-with-closures-in-javascript

// START OF NEW CODE

// import { bear } from './../src/hungry-bear.js';
//
// describe('HungryBear', function() {
//   let fuzzy = bear;
//
//   beforeEach(function() {
//     jasmine.clock().install();
//     fuzzy.foodLevel = 10;
//     fuzzy.name = "Fuzzy";
//     fuzzy.setHunger();
//   });
//
//   afterEach(function() {
//     jasmine.clock().uninstall();
//   });
//
//   it('should have a name and a food level of 10 when it is created', function() {
//     expect(fuzzy.name).toEqual("Fuzzy");
//     expect(fuzzy.foodLevel).toEqual(10);
//   });
//
//   it('should have a food level of 7 after 3001 milliseconds', function() {
//     jasmine.clock().tick(3001);
//     expect(fuzzy.foodLevel).toEqual(7);
//   });
//
//   it('should get very hungry if the food level drops below zero', function() {
//     fuzzy.foodLevel = 0;
//     expect(fuzzy.didYouGetEaten()).toEqual(true);
//   });
//
//   it('should get very hungry if 10 seconds pass without feeding', function() {
//     jasmine.clock().tick(10001);
//     expect(fuzzy.didYouGetEaten()).toEqual(true);
//   });
//
//   it('should return that the bear ate blueberries and the food level should go up 5', function() {
//     expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
//     expect(fuzzy.foodLevel).toEqual(15);
//   });
// });

//END OF NEW CODE

// The code below is what the file looked like after completing this lesson:
// https://www.learnhowtoprogram.com/javascript/asynchrony-and-apis/exploring-asynchrony-with-setinterval-and-settimeout
//
//START OF OLD CODE
//
import { HungryBear } from './../src/hungry-bear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should kill the hiker if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should kill the hiker if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have its foodLevel go up by 2 when fed TrailMix', function() {
    fuzzy.foodLevel = 5;
    jasmine.clock().tick(7001);
    fuzzy.feedTrailMix();
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it('should have its foodLevel go up by 3 when fed a Granola Bar', function() {
    fuzzy.foodLevel = 8;
    jasmine.clock().tick(7001);
    fuzzy.feedGranolaBar();
    expect(fuzzy.foodLevel).toEqual(4);
  });

  it('should have its foodLevel go up by 4 when fed a Peanut Butter Sandwich', function() {
    fuzzy.foodLevel = 2;
    jasmine.clock().tick(3001);
    fuzzy.feedGranolaBar();
    expect(fuzzy.foodLevel).toEqual(2);
  });

  it('should have its foodLevel go up by 8 when fed a Body Part', function() {
    fuzzy.foodLevel = 1;
    jasmine.clock().tick(6001);
    fuzzy.feedBodyPart();
    expect(fuzzy.foodLevel).toEqual(3);
  });

});
//
//END OF OLD CODE
