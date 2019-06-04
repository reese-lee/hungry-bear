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
    hiker.trailMixAmount();
    hungryBear.feedTrailMix(hiker);
    $("#trailMix").text(hiker.backpack["trailMix"]);
  });

  $("#granolaBar").text(hiker.backpack["granolaBar"]);
  $("#granolaBarButton").click(function() {
    hiker.granolaBarAmount();
    hungryBear.feedGranolaBar(hiker);
    $("#granolaBar").text(hiker.backpack["granolaBar"]);
  });

  $("#peanutButterSandwich").text(hiker.backpack["peanutButterSandwich"]);
  $("#peanutButterSandwichButton").click(function() {
    hiker.peanutButterSandwichAmount();
    hungryBear.feedPeanutButterSandwich(hiker);
    $("#peanutButterSandwich").text(hiker.backpack["peanutButterSandwich"]);
  });

  $("#bodyPart").text(hiker.backpack["bodyParts"]);
  $("#bodyPartButton").click(function() {
    hiker.bodyPartAmount();
    hungryBear.feedBodyPart(hiker);
    $("#bodyPart").text(hiker.backpack["bodyParts"]);
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
