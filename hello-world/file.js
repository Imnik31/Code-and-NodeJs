
const fs=require("fs")  // fs module is used for file system and there are so many inbuilt functions.
const os=require("os")    // to check thread pool size

// console.log(os.cpus().length);
// create or write file
// //sync..  blocking req
// fs.writeFileSync("./test.txt" ,"hey there")

// //async  ..... non blocking req
// fs.writeFile("./test.txt" ,"hey there async", (err)=>{})     // async always expect a callback




// read the file
const result= fs.readFileSync("./contact.txt", "utf-8")      // return a result in variable
console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result)=>{   // does not return anything like  variable
//     if(err){
//         console.log("error", err);
//     }
//     else{
//         console.log(result);
//     }
// })


// append the file
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())