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
  res.render('register');
});

// 验证该用户名是否被注册
router.post('/selectUser', function(req, res, next) {
  // 获取post提交的数据
   //console.log(req.body)
  var usermail = req.body.mail;
  
  // 连接数据库查询该用户名是否存在
  var selectSql = 'SELECT mail FROM user WHERE mail=?';
  var selectParams = [usermail];
  connection.query(selectSql,selectParams,function(err,result){
	  if(err){
		  console.error(err);
		  return;
	  }
	 // console.log(result);
	  // 判断是否返回结果
	
	// 通过res.send()为ajax返回值
	  if(result.length){
		  res.send('false')
	  }else{
		  res.send('true');
	  }
  })
  
  // 注册用户名
  router.post('/addUser', function(req, res, next) {
	 console.log(req.body)
	var usermail = req.body.mail;
	var usertel  = req.body.tel;
	var password = req.body.password;
	var insertSql = 'INSERT INTO user(id,mail,tel,password) VALUE(null,?,?,?)';
	var insertParams = [usermail,usertel,password];
	connection.query(insertSql,insertParams,function(err,result){
		console.log(result.insertId)
	})
	
	res.redirect('/index?mail='+usermail+'&pass='+password)
  });
});
module.exports = router;
