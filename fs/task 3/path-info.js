const fs = require('fs');


function pathInfo(path, callback) {
  var info = {
    path: path,
    type: 'file',
    content: '',
    childs: undefined
  };

  fs.stat(path, handleStatReady);
  function handleStatReady(err, stats) {
    if (err) callback(err, undefined);

    if (stats.isFile()) {
      fs.readFile(path,'utf8', handleRead);
      function handleRead(err, content) {
        info = {
          path: path,
          type: 'file',
          content: content,
          childs: undefined
        }
        callback(err, info);
      };
    }

    if (stats.isDirectory()) {
      fs.readdir(path, handleDirList);
      function handleDirList(err, filelist) {
//Нужно проверять наличие err каждый раз? Вот это не очень понятно...
//все равно же вызывается  callback  в конце функции
        if (err) callback(err, undefined);
        else {
          info = {
            path: path,
            type: 'directory',
            content: undefined,
            childs: filelist
          }
          callback(err, info);
        }
      }
    }
  }
}

module.exports = pathInfo;
