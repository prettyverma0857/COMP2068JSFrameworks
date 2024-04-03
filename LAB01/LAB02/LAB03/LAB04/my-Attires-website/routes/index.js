var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/denims', function(req, res, next) {
  res.render('denims', { title: 'Express' });
});
router.get('/skirt', function(req, res, next) {
  res.render('skirt', { title: 'Express' });
});
router.get('/top', function(req, res, next) {
  res.render('top', { title: 'Express' });
});
router.get('/trousers', function(req, res, next) {
  res.render('trousers', { title: 'Express' });
});

module.exports = router;
