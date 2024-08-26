import { workerData, parentPort } from "worker_threads";
import { Logger } from "../utils/logger.js";

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Perform Fibonacci computation and send the result back to the main thread
Logger.info("Fibonacci Computing...");
const result = fibonacci(workerData);
parentPort.postMessage(result);
