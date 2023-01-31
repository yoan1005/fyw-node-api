const fs = require('fs')
const files = fs.readdirSync('./src/helpers/')
const helpers = {}

for (var file of files) {
  const className = file.split('.helper')
  helpers[className[0]] = require('../helpers/' + file)
}

console.log(`[✔] Helpers: Running… OK (${Object.keys(helpers).length} loaded) [✔]`)

module.exports = helpers
