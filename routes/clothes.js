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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clothes');
});

router.post('/add', function(req, res, next) {
	// console.log(req.body)
	var name = req.body.name
	var user = name.split(';')
	var pri = parseInt(user[4])
	var selectSql = 'INSERT INTO shopping(id,brand,news,url,color,price,size,model) VALUE(null,?,?,?,?,?,?,?)'
	var selectParams = [user[0],user[1],user[2],user[3],pri,user[5],user[6]];
	// console.log(selectParams)
	connection.query(selectSql,selectParams,function(err,result){
		console.log(result.insertId)
	})
	res.render('clothes');
});
module.exports = router;