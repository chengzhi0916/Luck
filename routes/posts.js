var express = require("express")
var router = express.Router();

/* GET postss page. */
router.get('/', function(req, res, next) {
    res.render('posts', { title: 'posts',postsList:['文章一','文章二','文章三']});
  });
  
  module.exports = router;