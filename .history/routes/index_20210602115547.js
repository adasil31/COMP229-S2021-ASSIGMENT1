var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paraTxt: '' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', paraTxt: '' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me', paraTxt: ''});
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', paraTxt: '' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',paraTxt: '' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me',paraTxt: '' });
});


module.exports = router;
