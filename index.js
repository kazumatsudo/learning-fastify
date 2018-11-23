// logger を true にすると、ログが出力されるようになる
const fastify = require('fastify')({
    logger: true
});

// ルーティングの設定
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
});

// ポート3000番で受ける
fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`)
});