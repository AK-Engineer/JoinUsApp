var express = require('express');
var mysql = require('mysql');
var app = express();

// Creating MySql Connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //your username
  database : 'join_us'         //the name of your db
});


app.get("/", function(req, res){
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var msg = "We have " + results[0].count + " users";
 res.send(msg);
 });
});

app.get("/joke",function(req,res){
	var joke="A nice joke example!";
	res.send(joke);
});


app.get("/random_num", function(req, res){
 var num = Math.floor((Math.random() * 10) + 1);
 res.send("Your lucky number is " + num);
});

app.listen(8080, function(){
	console.log("Server running on 8080!");
});