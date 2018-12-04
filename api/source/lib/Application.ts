import express from "express";
import { Environment } from "./Environment";

export class Application {
  private app: express.Application;

  constructor() {
    this.listen.bind(this);
    this.app = express();
    this.app.listen(Environment.Port, this.listen);
  }

  private listen() {
    console.log(`Express Application Listening On Port: ${Environment.Port}`);
  }
}
