import path from 'path';

import { Worker } from 'worker_threads';

export function runWorker(scriptName, data) {
    return new Promise((resolve, reject) => {
      const workerPath = path.resolve('./blocking-event-loop', 'workers', scriptName);
      const worker = new Worker(workerPath, { workerData: data });
      
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code: ${code}`));
        }
      });
    });
  }
  