const fs = require('fs')
const file = require('./file-promise');

function getList(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, 'utf8', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function readAll(path) {
  return new Promise(resolve => {

//prepare Promises
  getList(path)
    .then(filelist => {
      const myFiles = filelist.map(function(item) {
        return file.read(item);
      });
//resolve Promises
      Promise.all(myFiles)
        .then(result => resolve(result));
//Form the result array

/* result not correct - how to add file content to array?

*/
          //console.log(files);

      });
    });
}



module.exports = readAll
