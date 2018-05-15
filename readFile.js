
const fs = require('fs');
console.log(' Reading the file...');

function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    })
  })
}

module.exports = read;
