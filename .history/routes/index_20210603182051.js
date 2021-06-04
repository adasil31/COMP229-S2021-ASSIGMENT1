var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', paratxt: "Welcome to my webpage" });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home', paratxt: '' });
});

/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me', paratxt: ''});
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project', paratxt: '' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { title: 'Services', paratxt: '' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', paratxt: ' ' });
});

router.get('/contact', function (req, res){
  res.render('contact', {qs: req.query});
});

router.post('/contact', urlencodedParser, function (req, res){
  console.log(req.body);
  res.render('index', {qs: req.query});
});

module.exports = router;
