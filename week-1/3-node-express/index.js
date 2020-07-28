const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const fs = require('fs');
// const path = require('path');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next()
});

app.get('/dishes',(req,res,next)=>{
    res.end('Will send all dishes');
});

app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish: '+req.body.name+' With details: '+req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('Put not support on dishes');
});

app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send details of the dish: '+req.params.dishId);
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('Put not support on dish: '+req.params.dishId);
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: ' +req.params.dishId+'\n')
    res.end('will update the dish: '+req.body.name+' with details: '+req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting dish: '+req.params.dishId);
});

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1>Express server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server run at http://${hostname}:${port}`)
});