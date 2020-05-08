var express = require('express');
var router = express.Router();
// 连接mysql数据库
var mysql = require('mysql');
// 引入自定义的数据库配置文件


// 创建数据库连接
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
  res.render('login');
});

// 验证该用户名是否存在
router.post('/selectUser', function(req, res, next) {
  // 获取post提交的数据
  // console.log(req.body)
  var usermail = req.body.mail;
  //var password = req.body.password;
  // 连接数据库查询该用户名是否存在
  var selectSql = 'SELECT password FROM user WHERE mail=?';
  var selectParams = [usermail];
  connection.query(selectSql,selectParams,function(err,result){
	console.log(result)
	  if(err){
		  console.error(err);
		  return;
	  }
	  res.send(result)
	
  })
  
});
module.exports = router;
