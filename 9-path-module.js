const path = require('path')


console.log(path.sep) //separater property, shows the path separator

const filePath = path.join('/content/','subfolder','text.txt') //pass the folder as string
console.log(filePath)

const base = path.basename(filePath) //shows the final/base path that is text.txt
console.log(base)

const absolute = path.resolve(__dirname, 'content','subfolder','text.txt') //path.resolve shows the absolute path
console.log(absolute)