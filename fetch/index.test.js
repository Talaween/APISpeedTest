const fetch = require('jest-fetch-mock');

jest.setMock('node-fetch', fetch);

const api = require('./index');

describe('Fetching One URL Data', () => {
 
  test('fetchOne()', async () => {
    
    data = {
            "title": "Yahoo",
            "response_code": 200,
            "speed_score": 69,
            "url": "https://www.yahoo.com/"
        }
    
    fetch.mockResponse(JSON.stringify(data));

    const current = await api.fetchOne('http://yahoo.com');

    expect(current).toEqual(data);
    expect(current).toMatchSnapshot();
  });

  test('fetch', () => {
    expect(fetch).toHaveBeenCalled();
    expect(fetch.mock.calls).toMatchSnapshot();
  });
});