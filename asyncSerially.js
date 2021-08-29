const fs = require('fs');

let files = ['file1.txt','file2.txt','file3.txt'];

console.log('before');
// Example thet it not work as it
// for(let i = 0;i<files.length;i++){
//     // console.log()
//     fs.readFile(files[i],function cb(err,data){
//         console.log("data"+data);
//     })
// }


function asyncSyrial(i){
    if(i == files.length)
        return;
    fs.readFile(files[i],function cb(err,data){
        console.log("data "+data);
        asyncSyrial(i+1);
    })
}
asyncSyrial(0);
console.log("after");