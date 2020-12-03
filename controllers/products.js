const products = [];

exports.getAddProduct = (req, res, next) => {

    // res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product',{pageTitle: 'Add Product', path:"/admin/add-product", formsCss : true,productCss:true, activeAddProduct:true});
}

exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});

    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    
    // will use default templating engine
res.render('shop',{prods:products, pageTitle: 'Shop',path:'/',hasProducts: products.length > 0 , activeShop: true });

}