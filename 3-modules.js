//Node uses CommonJS library, every file in node is a module (by default)
//MODULES - Encapsulated Code (only share minimum)
//We split code in modules, 

// import the value
const names = require('./4-FirstModule')
const sayHi = require('./5-SecondModule')
const data = require('./6-ThirdModule')
require('./7-FourthModule') //didn't assign to a variable.

//console.log(data)
//console.log(name)

sayHi('sohan')
sayHi(names.john)
sayHi(names.peter)