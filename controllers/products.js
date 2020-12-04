const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir,'views','add-product.html'))
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    productCss: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {

  const title = req.body.title;
  const imageUrl  = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({title,imageUrl,description,price});
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
    });
  });
};
exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
      hasProducts: products.length > 0,
       
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

exports.getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Index",
    path: "/",
  });
};

exports.getProductDetails = (req, res, next) => {
  res.render("shop/product-detail", {
    pageTitle: "Product Detail",
    path: "/product-detail",
  });
};
