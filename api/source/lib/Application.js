const fastify = require("fastify");
const fastifyStatic = require("fastify-static");
const Environment = require("./Environment");
const {join} = require("path");

class Application {
  constructor() {
    this.app = fastify({
      logger: true
    });
    this.app.register(fastifyStatic, {
      root: join(__dirname, "../../public/images"),
      prefix: "/api/images"
    });
  }

  async listen() {
    try {
      await this.app.listen(Environment.Port);
      this.app.log.info(`server listening on ${this.app.server.address().port}`)
    } catch (err) {
      this.app.log.error(err)
      process.exit(1)
    }
  }

  addRoute(route) {
    this.app.route(route)
  }
}

module.exports = Application;