var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET About me page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Project page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Services page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Contact  page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
