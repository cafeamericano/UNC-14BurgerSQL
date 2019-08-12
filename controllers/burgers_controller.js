var burger = require('./../models/burger.js')

var express = require('express')
var router = express.Router()

//GET ROUTES ####################################################################################

router.get('/', function (req, res) {
    res.redirect('/api/allburgers')
})

router.get("/api/allburgers", function (req, res) {
    burger.all(function (result) {
        res.render('index', { datum: result })
    });
});

router.get("/api/isdevoured", function (req, res) {
    burger.findDevoured(function (result) {
        res.render('index', { datum: result })
    });
});

router.get("/api/isnotdevoured", function (req, res) {
    burger.findNotDevoured(function (result) {
        res.render('index', { datum: result })
    });
});

// //POST ROUTES ####################################################################################

router.post('/api/addnewburger', function (req, res) {
    burger.addNew(req.body.burgerName, function (result) {
        res.send('Burger added.')
    });
})

//PUT ROUTES ####################################################################################

router.put('/api/changedevouredstatus', function (req, res) {
    console.log(req.body)
    burger.update(req.body.id, req.body.newdevouredstatus, function (result) {
        res.send('Burger updated.')
    });
})

// //DELETE ROUTES ####################################################################################

router.delete('/api/deleteaburger', function (req, res) {
    console.log(req.body.id)
    burger.delete(req.body.id, function (result) {
        res.send('Burger deleted.')
    });
})

module.exports = router;