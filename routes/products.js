var express = require('express');
var router = express.Router();
// 连接mysql数据库
var mysql = require('mysql');
// 引入自定义的数据库配置文件

//创建数据库连接
var db = require('./../config/db');
var connection = mysql.createConnection(db)
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'518888',
// 	database:'mamoto'
// })

// 连接数据库
connection.connect()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('goods');
});


router.post('/news', function(req, res, next) {
 
  var allProducts = 'SELECT * FROM goods';
  
  connection.query(allProducts,function(err,result){
	if(err){
		console.log(err)
	}
		//console.log(result)
		res.send(result);
		res.render('products')
	
	})

});
module.exports = router;
