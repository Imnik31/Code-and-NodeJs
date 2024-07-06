const cluster=require("node:cluster")
const os = require("os")
const express=require("express")




const totalCPU= os.cpus().length      // to know CPU
// console.log(totalCPU);

if(cluster.isPrimary){
    for (let i = 0; i < totalCPU; i++) {
        cluster.fork()
        
    }
}
else{
    const app=express()
    const PORT=8000;

    app.get("/", (req, res)=>{
        return res.json({message:`hello from express server ${process.pid}`})
    })

    app.listen(PORT, ()=>console.log(`Server started at PORT: ${PORT}`))
}