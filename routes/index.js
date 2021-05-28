var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/sobre', function(req, res, next) {
  res.render('about');
});
router.get('/produtos', function(req, res, next) {
  res.render('products');
});
router.get('/loja', function(req, res, next) {
  res.render('store');
});
module.exports = router;
