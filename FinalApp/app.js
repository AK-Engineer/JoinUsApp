var express = require('express');
var app = express();

app.get("/",function(req, res){
	res.send("Hello World");
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