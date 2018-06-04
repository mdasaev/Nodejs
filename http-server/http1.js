//client part

const http = require('http');
const querystring = require('querystring');

let post_data = querystring.stringify({
  'key':'trnsl.1.1.20160723T183155Z.f2a3339517e26a3c.d86d2dc91f2e374351379bb3fe371985273278df',
  'text' : '',
  'lang' : 'ru-en'
});

let options = {
  hostname: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
  port: 443,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(post_data)
  }
};




//server part


//const http = require('http');
const port = 3000;
function handler(req, res) {
  let name = req.url.replace('/', '') || 'World';
  console.log(req.method);
  console.log(JSON.stringify(req.headers));

  if (req.method == 'GET') {
    res.writeHead(200, 'OK', {'Content-Type': 'text/html'});
    res.write(`<form action="/" method="post" id="form1">
    Type a word: <input type="text" name="word" id="word">
    <input type="submit" value="Submit" onclick="submit_by_id">
    </form>`);
    res.end();
  }
  else if (req.method == 'POST') {
    let request = http.request(options);
    request.write(post_data);
    request.end();
    console.log(post_data['word']);
  }

}

function submit_by_id() {
  document.getElementById("form1").submit(); //form submission
  //alert("Form Id : " + document.getElementById("form_id").getAttribute("id") + " Form Submitted Successfully......");
  post_data['word'] = document.getElementById("word").value;
  console.log(post_data['word']);


}

//run
const server = http.createServer();
server.on('error', err => console.error(err));
server.on('request', handler);
server.on('listening', () => {
  console.log('Start HTTP on port %d', port);
});
server.listen(port);
