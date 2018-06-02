const crypto = require('crypto');
const fs = require('fs')
//const hash = crypto.createHash('md5');
const stream  = require('stream');
var res;


class strToHex extends stream.Transform {
  constructor() {
    super();
    this.hash = crypto.createHash('md5');

  }
  _transform(chunk, encoding, callback) {
    this.hash.update(chunk);
    //res = this.hash.digest('hex');
    //this.push(res);
    callback();
  }

  _flush(callback) {
    this.push(this.hash.digest('hex'));
    callback();

  }
}

var ts = new strToHex();

var rs = fs.createReadStream('input.txt')
var ws = fs.createWriteStream('message.txt');

rs.pipe(ts).pipe(ws);
rs.pipe(ts).pipe(process.stdout);




//8b1a9953c4611296a827abf8c47804d7
//const hash = crypto.createHash('md5').update(dataset).digest("hex")

//rs.pipe(process.stdout);//.pipe(process.stdout);
//rs.pipe(ws);
