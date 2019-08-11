var mysql = require('mysql')
var handlebars = require('express-handlebars')
var express = require('express')

var app = express()
let port = process.env.PORT || 1000

app.get('/', function(req, res) {
    res.send('Home route hit')
})

app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})