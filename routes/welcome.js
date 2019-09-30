const Router = require('koa-router');

let router = new Router(); 

router.get('/', (cnx, next)=> {

    cnx.body = "Welcome to Google Page Speed API"
})
