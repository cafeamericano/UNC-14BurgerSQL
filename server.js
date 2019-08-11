//Dependencies
var mysql = require('mysql')
var handlebars = require('express-handlebars')
var express = require('express')

//Define express app and port number
var app = express()
let port = process.env.PORT || 1000

//Define express public folder
app.use(express.static('public'))

//Allow express to handle post requests with JSON data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Prepare handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//====================================================================

//Connection

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "phoebe17",
    database: "burgers_db"
});

//Routes

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/api', function (req, res) {
    query = `SELECT * FROM burgers;`
    connection.query(query, function (err, result) {
        console.log(result)
        res.render('index', {datum: result})
    });
})

//====================================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})