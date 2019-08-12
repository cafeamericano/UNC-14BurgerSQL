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

router.post('/api/addnewburger', function (req, res) {
    burger.addNew(req.body.burgerName, function (result) {
        res.send('Burger added.')
    });
})

router.put('/api/changedevouredstatus', function (req, res) {
    console.log(req.body)
    burger.update(req.body.id, req.body.newdevouredstatus, function (result) {
        res.send('Burger updated.')
    });
})

router.delete('/api/deleteaburger', function (req, res) {
    console.log(req.body.id)
    burger.delete(req.body.id, function (result) {
        res.send('Burger deleted.')
    });
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// router.get('/', function (req, res) {
//     res.redirect('/api/allburgers')
// })

// router.get('/api/allburgers', function (req, res) {
//     query = `SELECT * FROM burgers;`
//     connection.query(query, function (err, result) {
//         res.render('index', { datum: result })
//     });
// })

// router.get('/api/isdevoured', function (req, res) {
//     query = `SELECT * FROM burgers WHERE devoured=true;`
//     connection.query(query, function (err, result) {
//         res.render('index', { datum: result })
//     });
// })

// router.get('/api/isnotdevoured', function (req, res) {
//     query = `SELECT * FROM burgers WHERE devoured=false;`
//     connection.query(query, function (err, result) {
//         res.render('index', { datum: result })
//     });
// })

// //POST ROUTES ####################################################################################

// //Add new burger
// router.post('/api/addnewburger', function (req, res) {
//     query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${req.body.burgerName}', false);`
//     connection.query(query, function (err, result) {
//         res.send('Burger added.')
//     });
// })

// //PUT ROUTES ####################################################################################

// //Change devoured status
// router.put('/api/changedevouredstatus', function (req, res) {
//     console.log(query)
//     query = `UPDATE burgers SET devoured=${req.body.newdevouredstatus} WHERE id='${req.body.id}';`
//     connection.query(query, function (err, result) {
//         res.send('Burger devoured status updated.')
//     });
// })

// //DELETE ROUTES ####################################################################################

// //Delete a burger
// router.delete('/api/deleteaburger', function (req, res) {
//     query = `DELETE FROM burgers WHERE id='${req.body.id}';`
//     connection.query(query, function (err, result) {
//         res.send('Burger deleted.')
//     });
// })

module.exports = router;