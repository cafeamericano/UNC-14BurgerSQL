var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "phoebe17",
        database: "burgers_db"
    })
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

var sql = `CREATE TABLE burgers (id INT NOT NULL AUTO_INCREMENT, burger_name TEXT, devoured BOOL, PRIMARY KEY(id));`
console.log(sql)
connection.query(sql, function (err) {
    if (err) throw err;
});

module.exports = connection; //Export for usage by ORM
