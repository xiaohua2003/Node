const fs=require('fs');
//const data= fs.readFileSync('./txt/input.txt','utf8');
//const outData=`introduction: ${data}\n created on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', outData)

////
//creating server using http module
const tempOverview=fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard=fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct=fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data=fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObject=JSON.parse(data)
const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    //Overview page
    if(pathName==='/'|| pathName==='/overview'){
        res.writeHead(200, {
            'Content-type':'text/html'
        })
        res.end(tempOverview);
    //product page
    } else if (pathName==='/product'){
        res.end("this is ourt product")
    //API
    }else if (pathName==='/api'){
           res.writeHead(200, {
               'content-type':'application/json'
           })
           res.end(data)
    //NOT FOUND 
    } else {
        res.writeHead(404, {
            'Content-type':'text/html'
        })
        res.end('<h1>page not found</h1>')
    }
})
server.listen (8018, ()=>{
    console.log("listening to request on port 8006");
})