
const fs = require('fs');

function read(path) {
  var fObject = {};
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        fObject = {name: path, content: content}
        resolve(fObject);
      }
    })
  })
}

function write(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(path);
      }
    })
  })
}



module.exports = {
  read,
  write
};
