import { outputDelay } from "./utils/delay.js";

outputDelay(300);

setInterval(function compute() {
  var sum = 0;

  for (var i = 0; i <= 999999999; i++) {
    sum += i * 2 - (i + 1);
  }
}, 2000);