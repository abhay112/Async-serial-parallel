const fs = require('fs');

let files = ['file1.txt','file2.txt','file3.txt'];

console.log('before');

for(let i = 0;i<files.length;i++){
    fs.readFile(files[i],cb);
}
function cb(er,data){
    console.log("data"+data);
}