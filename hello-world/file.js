
const fs=require("fs")
const os=require("os")    // to check thread pool size

console.log(os.cpus().length);
// create or write file
// //sync..  blocking req
// fs.writeFileSync("./test.txt" ,"hey there")

// //async  ..... non blocking req
// fs.writeFile("./test.txt" ,"hey there async", (err)=>{})     // async always expect a callback




// read the file
// const result= fs.readFileSync("./contact.txt", "utf-8")      // return a result in variable
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result)=>{
//     if(err){
//         console.log("error", err);
//     }
//     else{
//         console.log(result);
//     }
// })


// append the file
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())