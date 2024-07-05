const express = require("express")
const fs= require("fs")
const zlib= require("zlib")
const status = require("express-status-monitor");
const { Stream } = require("stream");


const app= express()
const PORT =8000;

app.use(status())


// stream read(sample.txt)-->zipper-->fs write stream
fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")))

app.get("/", (req, res)=>{
    // fs.readFile("./sample.txt", (err, data)=>{   it take more memory.
    //     res.end(data);
    // })

    const stream= fs.createReadStream("./sample.txt", "utf-8")
    stream.on("data",(chunk)=>res.write(chunk))
    Stream.on("end", ()=>res.end())
})

app.listen(PORT, ()=> console.log(`server started at  PORT:8000`))