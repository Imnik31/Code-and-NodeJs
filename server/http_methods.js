// const http= require("http")

// // handling URLs in Nodejs

// const  myServer = http.createServer((req,res)=>{
//   if (req.url==="/favicon.ico") return res.end()
//   const log =`${Date.now()}:${req.method} ${req.url} new req received\n`
//   const myUrl=url.parse(req.url,true)
 
//   fs.appendFile("log.txt", log, (err, data)=>{
//    switch(myUrl.pathname){
//     case "/":
//       if (req.method==='GET') 
//         res.end("HomePage")
//         break;
//     case "/about":
//       const username = myUrl.query.myname
//       res.end(`hi, ${username}`)
//       break;
//       case "/signup":
//         if (req.method==='GET')
//         res.end('this is signup form')
//         else if (req.method==='POST')
//          // db query
//         res.end('Succes')
//       default:
//         res.end("404 not found")
//    }
//   })
// },

// myServer.listen(8000,()=>{
//     console.log("server started");
// }))


const http = require("http");
const fs = require("fs");
const url = require("url");

// handling URLs in Nodejs
function myHandler(req, res){
  if (req.url === "/favicon.ico") return res.end();
  
  const log = `${Date.now()}:${req.method} ${req.url} New req received\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    if (err) {
      console.error("Error writing to log file:", err);
      res.end("Server error");
      return;
    }
    switch (myUrl.pathname) {
      case "/":
        if (req.method === 'GET') 
          res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`hi, ${username}`);
        break;
      case "/signup":
        if (req.method === 'GET')
          res.end('this is signup form');
        else if (req.method === 'POST') {
          // db query
          res.end('Success');
        }
        break;
      default:
        res.end("404 not found");
    }
  });
};


  

const myServer= http.createServer(myHandler);

myServer.listen(8000, () => {
  console.log("server started");
});
