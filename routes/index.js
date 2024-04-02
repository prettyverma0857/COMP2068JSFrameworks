var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Define routes for each actor
router.get('/Attire1', function(req, res, next) {
  res.render('Attire1', { actorName: 'Attire 1' });
});

router.get('/Attire2', function(req, res, next) {
  res.render('Attire2', { actorName: 'Attire 2' });
});

router.get('/Attire3', function(req, res, next) {
  res.render('Attire3', { actorName: 'Attire 3' });
});

router.get('/Attire4', function(req, res, next) {
  res.render('Attire4', { actorName: 'Attire 4' });
});

// Add routes for otherAttires

module.exports = router;
