import { prod } from "../environment/prod";
import { test } from "../environment/test";
import { dev } from "../environment/dev";

export class Environment {
  private static nodeEnv = process.env.NODE_ENV;

  private static get env() {
    if (Environment.nodeEnv === "production") {return prod;}
    if (Environment.nodeEnv === "testing") {return test;}
    return dev;
  }

  static get Port() {return Environment.env.port;}
}
