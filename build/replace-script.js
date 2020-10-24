const fs = require('fs')
const oldPath = new RegExp('/static/', 'g');
const newPath = '/nodejsapi/static/'

fs.readFile('./dist/index.html', 'utf8', (err, data) =>
  err ? console.log("ERROR" + err) :
  fs.writeFile(
    './dist/index.html',
    // data.replace(`/static/`, `/nodejsapi/static/`),
    data.replace(oldPath, newPath),
    'utf8',
    (err) =>
    err ? console.log("ERROR" + err) :
    console.log("SUCCESS - Replaced path with 'nodejsapi'")
  )
);
