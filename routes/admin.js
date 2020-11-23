const express = require('express');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {

    res.send('<form action="/admin/add-product" method="POST" > <input name="title" type="text" ><button type="submit" >Add Product</button></form>')
});
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;