import { outputDelay } from "./utils/delay.js";
import { Logger } from "./utils/logger.js";
import { runWorker } from "./workers/main-worker.js";

outputDelay(300);

async function main() {
  const FIBONACCI_PARAM = 40;
  const COMPUTE_PARAM = 999999;

  setInterval(() => {
    Logger.info("Doing some work in the main thread...");
  }, 3000);

  try {
    const fibonacciWorker = runWorker("fibonacci-worker.js", FIBONACCI_PARAM);
    const computeWorker = runWorker("compute-worker.js", COMPUTE_PARAM);

    fibonacciWorker
      .then((result) =>
        Logger.success(`Fibonacci Result (${FIBONACCI_PARAM}): ${result}`)
      )
      .catch((err) => Logger.error("Error in Fibonacci Worker:", err));

    computeWorker
      .then((result) =>
        Logger.success(`Computing Result (${COMPUTE_PARAM}): ${result}`)
      )
      .catch((err) => Logger.error("Error in Compute Worker:", err));
  } catch (err) {
    Logger.error(err);
  }
}

main();
