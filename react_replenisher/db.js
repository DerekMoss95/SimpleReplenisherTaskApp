var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'derekmoss',
    password : 'replenisher',
    database : 'replenisher'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql = "CREATE TABLE tasks (taskName VARCHAR(255), status VARCHAR(255), rank INT(3), taskCreateDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP, taskFinishDate DATETIME NULL, timeToFinish DATETIME NULL, recurring VARCHAR(255), notes VARCHAR(255), feedback VARCHAR(255))";
    //connection.query(sql, function (err, result) {
    //  if (err) throw err;
    //  console.log("Table created");
    });
//});

module.exports = connection;
//connection.end();