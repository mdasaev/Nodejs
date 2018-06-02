
const fs = require('fs')
//output stream
const stream  = require('stream');

class wStream extends stream.Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    console.log('echoing', chunk.toString());
    callback();
  }


};



//process.stdin.pipe(outStream);


//input

class rStream extends stream.Readable {
  constructor() {
    super();
  }

  _read(seq) {
    this.push(getRandomIntInclusive(10).toString());
    /*if   {
      this.push(null);
    }*/
  }

};


//transform


class addFiveTr extends stream.Transform  {
  constructor() {
    super();
  }
  //add number 5 as a tranform function
  _transform(chunk, encoding, callback) {
    var res;
    res = (Number(chunk)+5).toString()
    console.log('reading ',chunk.toString());
    console.log('after transform ', res);

    this.push(res);
    callback();
  }
};


function getRandomIntInclusive(max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1));
  //The maximum is inclusive and the minimum is inclusive
}


const genNumStream = new rStream();
const echoStream = new wStream();
const addFive = new addFiveTr();
//genNumStream.pipe(echoStream);
genNumStream.pipe(addFive).pipe(echoStream);
//genNumStream.pipe(addFive).pipe(process.stdout);// echoStream);
