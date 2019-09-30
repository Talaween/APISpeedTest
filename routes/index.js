const Router = require('koa-router');
var bodyParser = require('koa-bodyparser');

const googleAPI = require('../fetch');

let router = new Router({
   prefix: '/speed_test'
}); 

router.get('/', async (cnx, next) => {

    urls = (cnx.request.query.url !== undefined ? cnx.request.query.url:['https://www.hotel-internet-marketing.com/', 'https://www.bbc.co.uk/', 'https://www.google.co.uk/'])
    console.log(urls)
    await googleAPI.fetchMany(urls)
    .then(data => {
        let filtered = data.map(element => {
            return {
                title : element.title,
                response_code: element.responseCode,
                speed_score : element.ruleGroups.SPEED.score,
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
