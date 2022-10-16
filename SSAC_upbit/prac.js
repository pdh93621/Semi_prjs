const fs = require('fs')

jsonFile = JSON.parse(fs.readFileSync("./sources/coins.json"))

console.log(jsonFile)