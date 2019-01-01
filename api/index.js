// require("dotenv").config();
// const fastify = require("fastify")({
//   ignoreTrailingSlash: true,
//   logger: true,
//   bodyLimit: 100000,
// });
// const fastStatic = require("fastify-static");
// const {join} = require('path');
// const {readFile} = require('fs');

// fastify.register(fastStatic, {
//   root: join(__dirname, "./public"),
//   prefix: '/public'
// })

// fastify.decorate('notFound', (request, reply) => {
//   reply.sendFile("/client/index.html")
// })

// fastify.get('/', (request, reply) => {
//   reply.sendFile("/client/index.html");
// })

// fastify.listen(process.env.PORT || 8080, '0.0.0.0', (err, address) => {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// })

// fastify.setNotFoundHandler(fastify.notFound)

require('dotenv').config();
const express = require('express');
const {join} = require('path');
const app = express();

app.use("/", express.static(join(__dirname, '/public/client')));
app.use("/images", express.static(join(__dirname, '/public/images')));
app.use("*", (req, res, next) => {
  res.sendFile(join(__dirname, '/public/client/index.html'));
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Running');
});