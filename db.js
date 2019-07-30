// Step 1: Install the MySQL Node Package
// 		   npm install mysql 

// Step 2: Connect to Database

var mysql = require('mysql');
var faker = require('faker');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //your username
  database : 'join_us'         //the name of your db
});


//Step 3:Running a super simple SQL query:
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//    if (error){
//    	throw error;
//    } 
//    console.log('The solution is: ', results[0].solution);
// });
// Ctrl + C to terminate the connection

//Another sample query, this time selecting 3 things:

// var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].time);
//   console.log(results[0].date);
//   console.log(results[0].now);
// });

//Step 5:To SELECT all users from database:
// var q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// Step 6:To count the number of users in the database:
// var q = 'SELECT COUNT(*) AS total FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// Step 7a:Insert data manually with sql
// var q = 'INSERT INTO users(email) VALUES ("test@dog.com")';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// Returns
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0 }

// Step 7b:Insert data manually with node
// var person = {email:'Jenny467@gmail.com'};
// connection.query(q, function (error, results, fields) {
// Same as 'INSERT INTO users (email) VALUES ("Jenny467@gmail.com")'  
// connection.query('INSERT INTO users SET ?', person, function(error,result) {
// 	if (error) throw error;
// 	console.log(result);
// });

// Step 7c:Insert data dynamically
// var person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// };
// connection.query('INSERT INTO users SET ?', person, function(error,result) {
// 	if (error) throw error;
// 	console.log(result);
// });

// Step 8:Inserting bulk data
var data = [];
for (var i = 0; i < 500; i++) {
	data.push([
	faker.internet.email(),
	faker.date.past()
	]);
}

var q = 'INSERT INTO users (email,created_at) VALUES ?';
connection.query(q, [data], function(error,result) {
	if (error) throw error;
	console.log(result);
});


connection.end();