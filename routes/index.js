var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { name: 'hello' , title:"giới thiệu"});
});

module.exports = router;
