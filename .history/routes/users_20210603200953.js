<!--Created by: Alessandro da Silva Santos - Created on: Jun 04, 2021 - 300927354-->
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
