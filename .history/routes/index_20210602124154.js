var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: "My name is Alessandro da Silva Santos.

  I am 40 years old student at Centennial College Program Software Engineering.
  
  I love to enjoy life and make a different style for your company.
  
  
  If you need more informations about me, e-mail adasil31@my.centennialcollege.ca" });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: 'My name is Alessandro da Silva Santos.

  I am 40 years old student at Centennial College Program Software Engineering.
  
  I love to enjoy life and make a different style for your company.
  
  
  If you need more informations about me, e-mail adasil31@my.centennialcollege.ca' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me', paratxt: 'I am a Software Engineering student at Centennnial College - Toronto - Canada'});
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
