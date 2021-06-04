var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: "Welcome to my webpage, here you will find information about myself .I am Software Eng Student at Centennial College - Toronto  - Canada" });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: 'Welcome to my webpage, here you will find information about myself .I am Software Eng Student at Centennial College - Toronto  - Canada ' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me', paratxt: 'I am a Software Engineering student at Centennnial College - Toronto - Canada I am 40 years old graduated before in Business Management and Entrepreneurship but in my age I am looking to change my fils area
  '});
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', paratxt: 'I am working in a project ' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', paratxt: 'Ale' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me', paratxt: 'If you want to contact me please call 6478656094 or 33 Charles Street E - Toronto - ON - Canada ' });
});


module.exports = router;
