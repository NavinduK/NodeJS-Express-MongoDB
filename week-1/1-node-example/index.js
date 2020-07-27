const rectangle = require("./rectangle");

function solveRect(l,b) {
    console.log("l = " + l + " | b = " + b);
    rectangle(l,b, (err,rect)=>{
        if(err){
            console.log("ERROR : ", err.message);
        }
        else{
            console.log("Area = " + rect.area());
            console.log("Perimeter = " + rect.perimeter());
        }
    });
    console.log("Last Statement");
};

solveRect(2,4);
solveRect(-5,5);