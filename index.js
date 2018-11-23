// logger を true にすると、ログが出力されるようになる
const fastify = require('fastify')({
    logger: true
});

// ルーティングの設定
// reply.send を用いずに return で返すことも可能
fastify.get('/', async () => {
    return { hello: 'world' };
});

// ポート3000番で受ける
const start = async () => {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

// 実行
start();