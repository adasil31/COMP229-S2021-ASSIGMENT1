var express = require('express');
var router = express.Router();


const myabout = {
  title: 'About me',
  paraTxt: 'This is about me'
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('index', myabout);
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});


module.exports = router;