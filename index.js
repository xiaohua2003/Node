const fs=require('fs');
//const data= fs.readFileSync('./txt/input.txt','utf8');
//const outData=`introduction: ${data}\n created on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', outData)

////
//creating server using http module
const replaceTempCard=(temp,product)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output=output.replace(/{%QUANTITY%}/g, product.quantity);
    output=output.replace(/{%PRICE%}/g, product.price);
    output=output.replace(/{%IMAGE%}/g, product.image);
    if(!product.organic){
        output=output.replace(/{%NOT_ORGANIC%}/g, 'not-organic')
    }
    return output
}

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
        const cardsHtml=dataObject.map(el => replaceTempCard(tempCard, el)).join('')
        const output=tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
        res.end(output);
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
server.listen (8050, ()=>{
    console.log("listening to request on port 8006");
})