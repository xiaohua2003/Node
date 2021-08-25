//const fs=require('fs');
//const data= fs.readFileSync('./txt/input.txt','utf8');
//const outData=`introduction: ${data}\n created on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', outData)

////
//creating server using http module
const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName==='/'|| pathName==='/overview'){
        res.end('this is overView')
    } else if (pathName==='/product'){
        res.end("this is ourt product")
    }else{
        res.writeHead(404, {
            'Content-type':'text/html'
        })
        res.end('<h1>page not found</h1>')
    }
})
server.listen (8002, ()=>{
    console.log("listening to request on port 8002");
})