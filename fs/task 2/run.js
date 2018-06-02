const readAll  = require('./read-all.js');

/*func
  .readAll('./')
  .then(filelist => console.log(filelist))
  .catch(error => console.error(error))
//.then(result => console.log(result))
*/
function show(file) {
  console.log('-'.repeat(10));
  console.log(`Содержимое файлы ${file.name}:`);
  console.log(file.content);
  console.log('-'.repeat(10));
}

readAll('./')
  .then(files => files.forEach(show))
  .catch(err => console.error(err));
