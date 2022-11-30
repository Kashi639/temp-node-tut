// Fs module-File System
// syncronously and asyncronously/non-blocking

const {readFileSync, writeFileSync} = require('fs') //module name is fs
//readFileSync reads a file

//OR

//const fs = require('fs')
//fs.readFileSync
console.log('start');
const first = readFileSync('./content/first.txt','utf8') //decoding utf8-default
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' }
) //$ is interpolation
// flag: creates the same values  again
console.log('done with this task');
console.log('starting the next one');

//In sync fs multiple tasks run at the same time,
//not good for apps for multiple users.