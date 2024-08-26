import { outputDelay } from "./utils/delay.js";

outputDelay(300);

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// it blocks the main thread
Logger.info(fibonacci(40));
