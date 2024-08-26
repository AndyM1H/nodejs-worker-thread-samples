import { outputDelay } from "./utils/delay.js";
import { Logger } from "./utils/logger.js";

outputDelay(300);

setInterval(function compute() {
  var sum = 0;
  function chunk(start, end) {
    for (var i = start; i <= end; i++) {
      sum += i * 2 - (i + 1);
    }
    if (end < 999999999) {
      setImmediate(() => chunk(end + 1, end + 10000));
    } else {
      Logger.info("Finished computation");
    }
  }
  chunk(0, 10000);
}, 2000);
