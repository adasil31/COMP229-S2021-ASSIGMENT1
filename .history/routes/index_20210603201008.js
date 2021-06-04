<!--Created by: Alessandro da Silva Santos - Created on: Jun 04, 2021 - 300927354-->
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

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
  res.render('contact', { title: 'Contact', paratxt: ''});
});

router.post('/contact', urlencodedParser, function (req, res) {
  const data = {
    name: req.body.name,
    email: req.body.email
  }
  //console.log(data);
  res.render('home', {title: 'Home', paratxt: 'Thank you for your contact, I will reach you som ' + data.name });
});

module.exports = router;
