var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: "Welcome to my webpage" });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: 'Welcome to my webpage, here you will find information about myself .I am Software Eng Student at Centennial College - Toronto  - Canada ' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me', paratxt: ''});
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project', paratxt: 'I am working in a project for  ' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services', paratxt: 'Ale' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', paratxt: ' ' });
});


module.exports = router;
