var express = require('express');
var urllib = require('url')
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* Jsonp */
router.get('/jsonp', function (req, res, next) {
  var params = urllib.parse(req.url, true); //将参数转换为json对象
  var data = {
    'data': 'world'
  }
  var str = params.query.cb + '(' + JSON.stringify(data) + ')'; //拼接回调函数，str===cb({name:'deng',age:20}),返回函数字符串，前端收到后会立即执行
  res.send(str);
});

module.exports = router;