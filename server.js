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

//Home route

app.get('/', function (req, res) {
    res.render('index')
})

//Get routes

app.get('/api/allburgers', function (req, res) {
    query = `SELECT * FROM burgers;`
    connection.query(query, function (err, result) {
        res.render('index', { datum: result })
    });
})

app.get('/api/isdevoured', function (req, res) {
    query = `SELECT * FROM burgers WHERE devoured=true;`
    connection.query(query, function (err, result) {
        res.render('index', { datum: result })
    });
})

app.get('/api/isnotdevoured', function (req, res) {
    query = `SELECT * FROM burgers WHERE devoured=false;`
    connection.query(query, function (err, result) {
        res.render('index', { datum: result })
    });
})

//Add new burger
app.post('/api/addnewburger', function (req, res) {
    query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${req.body.burgerName}', false);`
    connection.query(query, function (err, result) {
        res.send('Burger added.')
    });
})

//Change devoured status
app.put('/api/changedevouredstatus', function (req, res) {
    console.log(query)
    query = `UPDATE burgers SET devoured=${req.body.newdevouredstatus} WHERE id='${req.body.id}';`
    connection.query(query, function (err, result) {
        res.send('Burger devoured status updated.')
    });
})

//Delete a burger
app.delete('/api/deleteaburger', function (req, res) {
    query = `DELETE FROM burgers WHERE id='${req.body.id}';`
    connection.query(query, function (err, result) {
        res.send('Burger deleted.')
    });
})

//====================================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})