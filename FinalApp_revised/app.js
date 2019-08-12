var mysql = require('mysql');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

// Setting up ejs
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "join_us"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// Routing
// Mysql + ExpressJs
app.get('/', function (req, res) {
	var q = "SELECT COUNT(*) AS count FROM users";
	connection.query(q, function(err,results){
		if (err) throw err;
		var count = results[0].count;
		// res.send('We have ' + count + " users in our db");
		res.render("home",{data : count});
	});  
});

// Adding post route
app.post("/register",function(req,res){
	// Extracting form data from request body
	var person = {
		email: req.body.email
	};

	connection.query('INSERT INTO users SET ?', person, function(err, result) {
 		if (err) throw err;
 		// res.send("Thanks for joining our Email List!");
 		res.redirect("/");
 });

	// console.log("POST REQUEST SENT TO /REGISTER"+req.body.email);
});

// Second Route
app.get('/joke', function (req, res) {
	var joke = "A nice joke!";
  res.send(joke);
});

// Last route
app.get('/random_num', function (req, res) {
	var num = Math.floor((Math.random() * 10) + 1);
 	res.send("Your lucky number is " + num);
});



// Starting server at port 8080
app.listen(8080, function () {
  console.log('Listening on port 8080!');
});