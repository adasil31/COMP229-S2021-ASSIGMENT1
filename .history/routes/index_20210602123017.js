var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: "Welcome to my webpage here you will find information about myself as graduation " });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: 'Eu ' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me', paratxt: 'VOce'});
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', paratxt: 'Criando' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', paratxt: 'Ale' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me', paratxt: 'test' });
});


module.exports = router;
