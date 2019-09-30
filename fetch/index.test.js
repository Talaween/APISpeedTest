const fetch = require('node-fetch');
const api = require('./index');

jest.mock('fetch');

test('should fetch data', () => {

    const result = {
            "data" :
            [
                {
                    "title": "Hotel Internet Marketing UP - Marketing & Websites for Hotels",
                    "response_code": 200,
                    "speed_score": 93,
                    "url": "https://www.hotel-internet-marketing.com/"
                },
                {
                    "title": "BBC - Homepage",
                    "response_code": 200,
                    "speed_score": 73,
                    "url": "https://www.bbc.com/"
                },
                {
                    "title": "Google",
                    "response_code": 200,
                    "speed_score": 100,
                    "url": "https://www.google.co.uk/"
                }
            ]
        }

    const resp = { data : result };

    fetch.mockImplementation(() => Promise.resolve(resp));

    api.fetchMany().then(resp => expect(resp.data).toEqual(result));
});