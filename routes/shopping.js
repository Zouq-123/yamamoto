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
  res.render('shopping');
});
router.post('/add', function(req, res, next) {
  var selectsql = 'SELECT * FROM shopping'
  connection.query(selectsql,function(err,result){
  	if(err){
  		console.error(err)
  	}
  	console.log(result)
  	res.send(result)
  })
});

module.exports = router;