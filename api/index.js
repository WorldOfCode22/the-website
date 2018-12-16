require("dotenv").config();
const fastify = require("fastify")({
  ignoreTrailingSlash: true,
  logger: true,
  bodyLimit: 100000,
});
const fastStatic = require("fastify-static");
const {join} = require('path');
const {readFile} = require('fs');

fastify.register(fastStatic, {
  root: join(__dirname, "./public"),
  prefix: '/public'
})

fastify.get('/', (request, reply) => {
  reply.sendFile("/client/index.html");
})

fastify.listen(process.env.PORT, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})