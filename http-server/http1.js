const https = require('https');
const url = 'https://netology-fbb-store-api.herokuapp.com/currency';
function process(data) {
  let curr = JSON.parse(data);
  curr
    .filter(item => item.CharCode === 'USD' || item.CharCode === 'EUR')
    .forEach(item => console.log(item.Name, item.Value)); }

function handler(response) {
  let data = '';
  response.on('data', function (chunk) {
    data += chunk;
  });
  response.on('end', function () {
    process(data);
  });
 }
 
const request = https.request(url);
request.on('response', handler);
request.end();
