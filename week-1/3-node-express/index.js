const http = require('http');
const express = require('express');

// const fs = require('fs');
// const path = require('path');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req,res,next)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1>Express server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server run at http://${hostname}:${port}`)
});