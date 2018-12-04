var express = require("express")
var router = express.Router();

/* GET postss page. */
router.get('/', function(req, res, next) {
    res.render('posts', { title: 'Hello Word' });
  });
  
  module.exports = router;