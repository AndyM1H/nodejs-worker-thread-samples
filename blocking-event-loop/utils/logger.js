import chalk from "chalk";
import fs from "fs";
import path from "path";

import { format } from "util";

export class Logger {
  static log(level, color, message, ...args) {
    const formattedMessage = format(message, ...args);
    const coloredMessage = color(formattedMessage);
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} [${level}]: ${coloredMessage}`;
    console.log(logMessage);

    Logger.saveLogToFile(`${timestamp} [${level}]: ${formattedMessage}\n`);
  }

  static debug(message, ...args) {
    Logger.log("DEBUG", chalk.gray, message, ...args);
  }

  static info(message, ...args) {
    Logger.log("INFO", chalk.white, message, ...args);
  }

  static warn(message, ...args) {
    Logger.log("WARN", chalk.yellow, message, ...args);
  }

  static error(message, ...args) {
    Logger.log("ERROR", chalk.red, message, ...args);
  }

  static success(message, ...args) {
    Logger.log("SUCCESS", chalk.green, message, ...args);
  }

  static saveLogToFile(message) {
    const fileLogger = new FileLogger();
    fileLogger.appendToFile(message);
  }
}

class FileLogger {
  LOG_DIR = path.resolve("./", "logs");
  LOG_FILE_PATH = path.join(this.LOG_DIR, "app.log");

  constructor() {
    this.#ensureLogDirExists();
  }

  #ensureLogDirExists() {
    if (!fs.existsSync(this.LOG_DIR)) {
      fs.mkdirSync(this.LOG_DIR, { recursive: true });
    }
  }

  appendToFile(message) {
    fs.appendFile(this.LOG_FILE_PATH, message, (err) => {
      if (err) {
        console.error("Failed to write to log file:", err);
      }
    });
  }
}
