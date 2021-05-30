const fs = require('fs');

async function readFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString());
      }
    })
  });
}

// 大文件如何处理
async function writeFile (path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  })
}

module.exports = {
  readFile,
  writeFile
};