import express from "express";
import { Environment } from "./Environment";
import { join } from "path";

export class Application {
  private app: express.Application;

  constructor() {
    this.listen.bind(this);
    this.app = express();
    this.app.use("/api/images", express.static(join(__dirname, "../../public/images")));
    this.app.listen(Environment.Port, this.listen);
  }

  private listen() {
    console.log(`Express Application Listening On Port: ${Environment.Port}`);
  }
}
