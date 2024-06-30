// const http= require("http")
// const fs= require("fs")
// const url=require("url")



// created server by http module
const  myServer= http.createServer((req, res)=>{
  console.log("req,fs");
  // const log =`${Date.now()}:${req.method} ${req.url} new req received\n`
  //   fs.appendFile("log.txt", log, (err, data)=>{
  //  switch(myUrl.pathname){
  //   case "/":
  //     if (req.method==='GET') 
  //       res.end("HomePage")
  //       break;
  res.end("hello from server")
})


myServer.listen(8000,()=>{
    console.log("server started");
})



const express= require("express")

const app= express()
app.get("/", (req, res) =>{
  return res.send ("hello from home page")
});

app.get("/about", (req,res)=>{
  return res.send (`Hello ${req.query.name}`)
})


// handling URLs in Nodejs

// function myHandler(req,res){
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
// }

app.listen(8000, ()=>console.log("server started"))

