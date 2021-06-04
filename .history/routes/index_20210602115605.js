var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paraTxt: 'Vivido' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', paraTxt: 'Eu ' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me', paraTxt: 'VOce'});
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project', paraTxt: 'Criando' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',paraTxt: 'Ale' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me',paraTxt: 'test' });
});


module.exports = router;
