'use strict';

const fetch = require('node-fetch');
const config = require('../config');

const fetchOne = url => new Promise( (resolve, reject)=> {
    fetch(config.googlePageSpeed() + url, { method: 'GET' })
    .then(res =>  res.json())
    .then(json => {
        if (json.error)
            throw json
        resolve(json);
    })
    .catch(err => {
        reject(err);
    })
});


const fetchMany =  urls => new Promise ( async (resolve,reject) => {
    let result = [];
    await (async () => {
        for (let i = 0; i < urls.length; i++) {
            result [i] = await new Promise(resolve => resolve(fetchOne(urls[i])) );
        }
    })().then(() => {
        resolve(result);
    }).catch(err => reject(err) );
});

module.exports = {fetchOne, fetchMany};




    
