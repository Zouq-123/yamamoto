var express = require('express');
var router = express.Router();
// 连接mysql数据库
var mysql = require('mysql');
// 引入url模块
var url = require('url');

// 创建数据库连接
var db = require('./../config/db');
var connection = mysql.createConnection(db)
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'123456',
// 	database:'project2'
// })
connection.connect()
var ss;
var dt = 'SELECT * FROM woman limit 20,9';
connection.query(dt,function(err,result){
	if(err){
		console.error(err)
		return;
	}
	ss=result;
})





/* GET users listing. */
router.get('/', function(req, res, next) {
	data=url.parse(req.url,true).query;
  res.render('woman');
  res.send();
});
router.post('/', function(req, res, next) {
	
 res.send(ss)
});


module.exports = router;
