// Fs module-File System
// syncronously and asyncronously/non-blocking

const {readFile, writeFile} = require('fs') //module name is fs
//readFileSync reads a file

//OR

//const fs = require('fs')
//fs.readFileSync
console.log('start');
//callback function, use utf8 or else will get a buffer
readFile('./content/first.txt','utf8', (err,result)=>{ 
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err,result=>{
            if(err){
                return;
                console.log(err);
            }
            console.log('done with this task');
        }))
    })

})
console.log('starting next task');
//result will be in the file created.

//In async you have to wait until 1 task is finished to go onto another one,
//Great for an application have multiple users