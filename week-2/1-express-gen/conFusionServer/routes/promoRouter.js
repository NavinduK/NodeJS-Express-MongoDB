const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all promotions');
})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+req.body.name+', With details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put not support on promotions');
})
.delete((req,res,next)=>{
    res.end('Deleting all promotions');
});


promoRouter.route('/:promotionId')
.get((req,res,next)=>{
    res.end('Will send details of the promotion: '+req.params.promotionId);
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('Put not support on promotion: '+req.params.promotionId);
})
.put((req,res,next)=>{
    res.write('Updating the promotion: ' +req.params.promotionId+'\n')
    res.end('Will update the promotion: '+req.body.name+', With details: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting promotion: '+req.params.promotionId);
});

module.exports = promoRouter;