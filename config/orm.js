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
    }
};

module.exports = orm;