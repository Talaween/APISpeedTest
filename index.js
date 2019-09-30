const Koa = require('koa');
const endpoint = require('./routes');

let app = new Koa();

const port = process.env.PORT || 3000;

app.use(endpoint.routes());

app.listen(port);

