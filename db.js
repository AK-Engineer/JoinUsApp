// Step 1: Install the MySQL Node Package
// 		   npm install mysql 

// Step 2: Connect to Database

var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //your username
  database : 'join_us'         //the name of your db
});


// Step 3: Run Queries
// 		   Running a super simple SQL query like:
//         SELECT 1 + 1; 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
});

// Ctrl + C to terminate the connection

//Another sample query, this time selecting 3 things:

var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});

connection.end();