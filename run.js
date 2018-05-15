const file = require('./readFile');

file
  .read('./file.txt')
  .then(result => console.log(result))
  .catch(error => console.error(error))
