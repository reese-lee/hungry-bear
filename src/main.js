import { HungryBear } from './hungry-bear.js';
import { Hiker } from './hiker.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Hikers from './img/hikers.png';
import IdleBear from './img/idleBear.png';
import AngryBear from './img/angryBear.png';
import SadBear from './img/sadBear.png';

let hikers = document.getElementById('hiker');
hikers.src = Hikers;
let idleBear = document.getElementById('idleBear');
idleBear.src = IdleBear;
let angryBear = document.getElementById('angryBear');
angryBear.src = AngryBear;
let sadBear = document.getElementById('sadBear');
sadBear.src = SadBear;

$(document).ready(function() {
  let hungryBear = new HungryBear;
  let hiker = new Hiker;
  $(".hikerDead").hide();
  $(".bearDead").hide();

  StatTrack(hungryBear);
  hungryBear.setHunger();

  $("#shotgun").text(hiker.backpack["shotgun"]);
  $("#shotgunButton").click(function() {
    hiker.shotgunAmount();
    hungryBear.shootBear(hiker);
    $("#shotgun").text(hiker.backpack["shotgun"]);
  });

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
    let timer = setInterval(() => {
      $("#health").text(hungryBear.health);
      $("#hunger").text(hungryBear.foodLevel);
      hiker.areYouDead();
      if(hungryBear.foodLevel === 0) {
        $(".row").hide();
        $(".mainTitle").hide();
        $(".hikerDead").show();
        clearInterval(timer);
      }
      else if (hungryBear.health <= 0) {
        $(".row").hide();
        $(".mainTitle").hide();
        $(".bearDead").show();
        clearInterval(timer);
      }
    }, 1000);
  }
});
