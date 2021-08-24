const fs=require('fs');
const data= fs.readFileSync('./txt/input.txt','utf8');
const outData=`introduction: ${data}\n created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', outData)