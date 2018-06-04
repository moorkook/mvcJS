var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const home = require('../controllers/homeController.js');
  home.base(req, res, next);
  //res.render('base', { title: 'Express', value: 'Yolo' });
});

module.exports = router;
