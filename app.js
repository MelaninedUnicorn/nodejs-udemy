

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

 
const app = express();

app.set('view engine','pug');
// if your views were stored else where you would put 
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use('/',(req,res,next) => {
    res.render('404',{pageTitle:"Page Not Found"});
res.status(404);
});




app.listen(3000);
