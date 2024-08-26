import { outputDelay } from "./utils/delay.js";
import { Logger } from "./utils/logger.js";
import { generateRandomId } from "./utils/random-id.js";

outputDelay(300);

setInterval(function compute() {
  const ID = generateRandomId();
  Logger.info(`ID[${ID}]: Computing...`);

  var sum = 0;
  function chunk(start, end) {
    for (let i = start; i <= end; i++) {
      for (let j = 1; j <= 1000; j++) {
        sum += Math.sqrt(i) * Math.log(j + i) + Math.pow(j, 2) / (i + 1);
      }
    }
    if (end < 200000) {
      setImmediate(() => chunk(end + 1, end + 5000));
    } else {
      Logger.info(`ID[${ID}]: Finished computation`);
    }
  }
  chunk(0, 5000);
}, 3000);
