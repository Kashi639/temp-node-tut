//GLOBALS - NO WINDOWS !!
//Global variables can be accessed anywhere in your application

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info abput env where the program is being executed

console.log(__dirname)
setInterval(()=> {
    console.log('hello world')
}, 1000)