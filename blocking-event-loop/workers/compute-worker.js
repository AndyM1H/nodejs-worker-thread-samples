import { workerData, parentPort } from "worker_threads";
import { Logger } from "../utils/logger.js";

function compute(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 1000; j++) {
      sum += Math.sqrt(i) * Math.log(j + i) + Math.pow(j, 2) / (i + 1);
    }
  }

  return sum;
}

// Perform computation and send the result back to the main thread
Logger.info("Computing...");
const result = compute(workerData);
Logger.info("Finished computing");
parentPort.postMessage(result);
