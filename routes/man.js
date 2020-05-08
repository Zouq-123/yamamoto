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
// 	database:'project'
// })
// 连接数据库
connection.connect()
var num=1;
var ss;
var dt = 'SELECT * FROM man limit 0,30';
connection.query(dt,function(err,result){
	if(err){
		console.error(err)
		return;
	}
	ss=result;
})
/* GET home page. */
router.get('/', function(req, res, next) {
	data=url.parse(req.url,true).query;
 res.render('man');
 res.send()
});
router.post('/', function(req, res, next) {
	
 res.send(ss)
});

module.exports = router;
