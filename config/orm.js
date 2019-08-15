var connection = require("./connection.js");

var orm = {
    all: function (tableName, desiredAction) {
        var queryString = "SELECT * FROM ??;"
        connection.query(queryString, [tableName], function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    },
    find: function (tableName, column, criteria, desiredAction) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?;"
        connection.query(queryString, [tableName, column, criteria], function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    },
    addNew: function(tableName, burgerName, desiredAction) {
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, false);";
        connection.query(queryString, [tableName, burgerName], function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    },
    update: function (tableName, setColumn, setValue, findColumn, findCriteria, desiredAction) {
        
        //If set value is boolean, format data type as such
        if ( setValue === 'true'){
            setValue = true;
        }
        if ( setValue === 'false'){
            setValue = false
        }

        //Perform the query
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [tableName, setColumn, setValue, findColumn, findCriteria], function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });

    },
    delete: function(tableName, column, criteria, desiredAction) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?;";
        connection.query(queryString, [tableName, column, criteria], function (err, result) {
            if (err) {
                throw err;
            }
            desiredAction(result);
        });
    }
};

module.exports = orm;