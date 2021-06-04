var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { paratxt: "Welcome to my webpage" });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { paratxt: '' });
});



/* GET About me page. */

router.get('/about', function(req, res, next) {
  res.render('about', { paratxt: ''});
});


/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { paratxt: '' });
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('service', { paratxt: '' });
});


/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { paratxt: '' } );
});

router.post('/contact', urlencodedParser, function (req, res){
  console.log(req.body);
  res.render('index', { paratxt: ' ' });
});

module.exports = router;
