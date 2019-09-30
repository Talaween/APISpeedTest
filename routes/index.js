'use strict';

const Router = require('koa-router');

const googleAPI = require('../fetch');

let router = new Router(); 

router.get('/', (cnx, next)=> {
    cnx.body = "Welcome to Google Page Speed API"
})

router.get('/speed_test', async (cnx, next) => {

    let urls = (cnx.request.query.url !== undefined ? cnx.request.query.url:['https://www.hotel-internet-marketing.com/', 'https://www.bbc.co.uk/', 'https://www.google.co.uk/'])
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
