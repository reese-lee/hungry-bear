import { HungryBear } from './hungry-bear.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import CuteBear from './img/cutebear.png';

let cuteBear = document.getElementById('cuteBear');
cuteBear.src = CuteBear;


$(document).ready(function() {
  let hungryBear = new HungryBear;
  return hungryBear;
});
