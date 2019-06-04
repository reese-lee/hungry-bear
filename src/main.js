import { HungryBear } from './hungry-bear.js';
import { Hiker } from './hiker.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import CuteBear from './img/cutebear.png';
import Hikers from './img/hikers.png';

let cuteBear = document.getElementById('cuteBear');
cuteBear.src = CuteBear;

let hikers = document.getElementById('hiker');
hikers.src = Hikers;


$(document).ready(function() {
  let hungryBear = new HungryBear;
  // return hungryBear;
  let hiker = new Hiker;
  // return hiker;
  StatTrack(hungryBear);
  hungryBear.setHunger();

  $("#trailMix").text(hiker.backpack["trailMix"]);
  $("#trailMixButton").click(function() {
    $("#trailMix").text(hiker.backpack["trailMix"]);
    hiker.foodAmount();
    hungryBear.feedTrailMix(hiker);
    console.log(hiker.backpack["trailMix"]);
  });

  $("#granolaBar").text(hiker.backpack["granolaBar"]);
  $("#granolaBarButton").click(function() {
    $("#granolaBar").text(hiker.backpack["granolaBar"]);
    hungryBear.feedGranolaBar(hiker);
  });

  $("#peanutButterSandwich").text(hiker.backpack["peanutButterSandwich"]);
  $("#peanutButterSandwichButton").click(function() {
    $("#peanutButterSandwich").text(hiker.backpack["peanutButterSandwich"]);
    hungryBear.feedPeanutButterSandwich(hiker);
  });

  $("#bodyPart").text(hiker.backpack["bodyParts"]);
  $("#bodyPartButton").click(function() {
    $("#bodyPart").text(hiker.backpack["bodyParts"]);
    hungryBear.feedBodyPart(hiker);
  });


  function StatTrack(hungryBear) {
    setInterval(() => {
      $("#hunger").text(hungryBear.foodLevel);
      hiker.areYouDead();
      if(hungryBear.foodLevel === 0) {
        $(".row").hide();
        $(".dead").show();
      }
    }, 1000);
  }
});
