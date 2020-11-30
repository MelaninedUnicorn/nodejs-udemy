const e = require('express');
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');
router.get('/', (req, res, next) => {
    // will use default templating engine
res.render('shop');
});

module.exports = router;