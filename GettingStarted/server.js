// Remember: npm i fastify
// Remember: {"type": "module"}

// Require the framework and instantiate it

// ESM
import Fastify from 'fastify';
const fastify = Fastify({
  logger: true
});

/*
// CommonJS
const fastify = require('fastify')({
  logger: true
});
*/

// Declare a route
fastify.get('/', function(request, reply) {
  reply.send({ hello: 'world' });
});

/* OR
fastify.get('/', async (request, reply) => {
  return { hello: world };
});
*/

// Run the server!
fastify.listen({ port: 3000}, function(err, address) {
  if(err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

/* OR
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
*/
