//Dependencies
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

//Routing
app.use(require('./controllers/burgers_controller.js'))

//====================================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})