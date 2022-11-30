// HTTP Module
const http = require('http');

//createServer method, parameters request and response
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('Welcome to our home page')
   }
   if(req.url === '/about'){
    res.end('Here is our short History')
   }
   res.end(`
   <h1>Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">back home</a>
   `)
})

//what port where are listening to
server.listen(5000)

//after typing node app.js on the terminal,
//type localhost:5000 on the webbrowser to see the message