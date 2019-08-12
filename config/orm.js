var connection = require("./connection.js");

var orm = {
    all: function (tableName, desiredAction) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    },
    find: function (tableName, column, criteria, desiredAction) {
        var queryString = "SELECT * FROM " + tableName + ' WHERE ' + column + '=' + criteria + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    },
    addNew: function(tableName, burgerName, desiredAction) {
        var queryString = "INSERT INTO " + tableName + ' (burger_name, devoured) VALUES ("' + burgerName + '", false);';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    }
};

module.exports = orm;