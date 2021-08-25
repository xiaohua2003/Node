//const fs=require('fs');
//const data= fs.readFileSync('./txt/input.txt','utf8');
//const outData=`introduction: ${data}\n created on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', outData)

////
//creating server using http module
const http=require('http')
const server=http.createServer((req,res)=>{
    
    res.end("hello world")
})
server.listen (5000, ()=>{
    console.log("listening to request on port 8000");
})