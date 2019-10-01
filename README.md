# API Speed Test
A Simple Koa APP to communicate with Google Page Speed API

test this application on the following link:

https://google-page-speed.herokuapp.com/speed_test

install all dependecies

```js
npm install
```

then run the server


```js
npm start
```

the following endpoints are implemented:

localhost:8080/

will print a welcome message

localhost:8080/speed_test

this path accepts the following parameter:

url: is an array of urls you would like to retrieve their page speed data, 
if none is specified, the default urls are:
['https://www.hotel-internet-marketing.com/', 'https://www.bbc.co.uk/', 'https://www.google.co.uk/']

example:
http://localhost:8080/speed_test?url=http://yahoo.com&url=http://hotmail.com

for this request the response will be

```js
[
    {
        "title": "Yahoo",
        "response_code": 200,
        "speed_score": 69,
        "url": "https://www.yahoo.com/"
    },
    {
        "title": "Outlook – free personal email and calendar from Microsoft",
        "response_code": 200,
        "speed_score": 66,
        "url": "https://outlook.live.com/owa/"
    }
]
```
