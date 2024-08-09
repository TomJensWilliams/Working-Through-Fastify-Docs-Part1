route is a method which configures the endpoints of your application, and you can declare a route with either a shorthand or full declaration. A full declaration would be in the form fastify.route(options), while shorthand declarations will instead have an HTTP command, or all, after fastify, and be structured a little differenty. Some examples of shorhand declarations would look like these: fastify.get(path, [options], handler), fastify.head(path, [options], handler), fastify.post(path, [options], handler), fastify.put(path, [options], handler), fastify.delete(path, [options], handler), fastify.options(path, [options], handler), fastify.patch(path, [options], handler), and fastify.all(path, [options], handler).

The handler may not be present both in the options and as a third parameter, that would throw a duplicate handler error, but it can be present in either, see both of the following examples are acceptable:

As third parameter:
```
const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
}
fastify.get('/', opts, (request, reply) => {
  reply.send({ hello: 'world' })
})
```

Present in the options:
```
const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  handler: function (request, reply) {
    reply.send({ hello: 'world' })
  }
}
fastify.get('/', opts)
```
