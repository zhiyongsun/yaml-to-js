const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Get document, or throw exception on error

try {
  var doc = yaml.safeLoad(fs.readFileSync('./source/index.yml', 'utf8'));
  // let str = yaml.safeDump(doc);
  console.log(doc);
  fs.writeFile('./dist/index.js', JSON.stringify(doc), function (err) {
    if (err) {
      console.log('err', err);
    }
  })
} catch (e) {
  console.log(e);
}
