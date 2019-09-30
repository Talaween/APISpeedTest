const Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

const googleAPI = require('../fetch');

let router = new Router({
   prefix: '/speed_test'
}); 

router.get('/', async (cnx, next) => {
    await googleAPI.fetchMany(cnx.request.query.url)
    .then(data => {
        let filtered = data.map(element => {
            return {
                title : element.title,
                responseCode: element.responseCode,
                speed : element.ruleGroups.SPEED.score,
                url: element.id
            }
        })
        cnx.body = filtered
    })
    .catch(err => {
        cnx.response.status = err.error.code;
        cnx.body = err
    });
});

module.exports = router;
