import { outputDelay } from "./utils/delay.js";
import { Logger } from "./utils/logger.js";

outputDelay(300);

setInterval(function compute() {
  Logger.info("Computing...");
  var sum = 0;

  for (var i = 0; i <= 200000; i++) {
    for (let j = 1; j <= 1000; j++) {
      sum += Math.sqrt(i) * Math.log(j + i) + Math.pow(j, 2) / (i + 1);
    }
  }

  Logger.info("Finished computation");
}, 3000);
