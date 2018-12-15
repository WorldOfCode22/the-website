const prod = require("../environment/prod");
const test = require("../environment/test");
const dev = require("../environment/dev");

class Environment {

  static get env() {

    if (process.env.NODE_ENV === "production") {return prod;}
    if (process.env.NODE_ENV === "testing") {return test;}
    return dev;
  }

  static get Port() {return Environment.env.port;}
}

module.exports = Environment;