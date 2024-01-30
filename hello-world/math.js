function add(a,b){
    return a+b
}


function sub(a,b){
    return a-b
}

// module.exports=add
// module.exports=sub     //will over write

module.exports={
    add,sub          // to return multiple things
}

// exports.add =(a,b)=> a+b     // annoymous function not any name