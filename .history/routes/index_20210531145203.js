var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About me page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'About me' });
});

/* GET Project page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/* GET Services page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ser' });
});

/* GET Contact Me page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
