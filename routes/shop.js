const e = require("express");
const express = require("express");
const path = require("path");
// const shopController = require('../controllers/shop');
const productsController = require("../controllers/products");
const router = express.Router();

router.get("/", productsController.getIndex);
router.get("/products", productsController.getProducts);
router.get("/orders", productsController.getOrders);
router.get("/checkout", productsController.getCheckout);
router.get("/product-detail", productsController.getProductDetails);
router.get("/cart", productsController.getCart);
module.exports = router;
