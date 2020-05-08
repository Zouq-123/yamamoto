var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = require('./../config/db');
var connection = mysql.createConnection(db)
// var connection = mysql.createConnection({
// 	host:'localhost',
// 	user:'root',
// 	password:'66666',
// 	database:'h5'
// })
connection.connect()

router.get('/', function(req, res, next) {
  res.render('new');
});

router.post('/selectUser', function(req, res, next) {
	var selectsql = 'SELECT * FROM goods'
	connection.query(selectsql,function(err,result){
		if(err){
			console.error(err)
		}
		console.log(result)
		res.send(result)
		res.render('new');
	})
});

router.post('/options', function(req, res, next) {
	// console.log(req.body)
	var categ = req.body.categ
	var name = req.body.name
		if(categ=='brand'){
			var selectsql = 'SELECT * FROM goods WHERE brand=?'
			var selectpar = [name]
			connection.query(selectsql,selectpar,function(err,result){
				if(err){
					console.error(err)
				}
				// console.log(result,1)
				res.send(result)
				return 
			})
		}else if(categ=='sort'){
			var selectsql = 'SELECT * FROM goods WHERE sort=?'
			var selectpar = [name]
			connection.query(selectsql,selectpar,function(err,result){
				if(err){
					console.error(err)
				}
				// console.log(result,2)
				res.send(result)
				return 
			})
		}else if(categ=='size'){
			var selectsql = 'SELECT * FROM goods WHERE size=?'
			var selectpar = [name]
			connection.query(selectsql,selectpar,function(err,result){
				if(err){
					console.error(err)
				}
				// console.log(result,3)
				res.send(result)
				return 
			})
		}else if(categ=='price'){
			var arr = name.split(',')
			var selectsql = 'SELECT * FROM goods WHERE price BETWEEN ? AND ?'
			var selectpar = [arr[0],arr[1]]
			connection.query(selectsql,selectpar,function(err,result){
				if(err){
					console.error(err)
				}
				// console.log(result,4)
				res.send(result)
				return
			})
		}
});


module.exports = router;
