const crypto = require('crypto');
const fs = require('fs')
const hash = crypto.createHash('md5');
hash.setEncoding('hex');


var rs = fs.createReadStream('input.txt')
var ws = fs.createWriteStream('message.txt');

rs.pipe(hash).pipe(ws);
rs.pipe(hash).pipe(process.stdout);


//8b1a9953c4611296a827abf8c47804d7
//const hash = crypto.createHash('md5').update(dataset).digest("hex")

//rs.pipe(process.stdout);//.pipe(process.stdout);
//rs.pipe(ws);
