const file = require('./file-promise');

file
  .read('./file.txt')
  .then(data => data.toUpperCase())
  .then(data => file.write('upper-data.txt',data))
  .then(filename => console.log(`Создан файл ${filename}`))
  .catch(error => console.error(error))
