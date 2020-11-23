

 const express = require('express');

//  this is a valid request handler
 const app = express()

 app.use('/product',(req,res,next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from "add product" Mugisha!</h1>')
});

 app.use('/',(req,res,next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from express Mugisha!</h1>')
});



app.listen(3000);
