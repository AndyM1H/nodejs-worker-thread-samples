import { Logger } from "./logger.js";

const getHrDiffTime = function (time) {
  // ts = [seconds, nanoseconds]
  var ts = process.hrtime(time);
  // convert seconds to miliseconds and nanoseconds to miliseconds as well
  return ts[0] * 1000 + ts[1] / 1000000;
};

export const outputDelay = function (interval, maxDelay) {
  maxDelay = maxDelay || 100;

  var before = process.hrtime();

  setTimeout(function () {
    var delay = getHrDiffTime(before) - interval;

    if (delay < maxDelay) {
      Logger.debug("delay is %s", delay);
    } else {
      Logger.warn("delay is %s", delay);
    }

    // repeat
    outputDelay(interval, maxDelay);
  }, interval);
};
