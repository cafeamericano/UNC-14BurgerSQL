var orm = require('./../config/orm.js')

var burger = {
    all: function (desiredAction) {
        orm.all("burgers", function (res) {
            desiredAction(res);
        });
    },
    findDevoured: function (desiredAction) {
        orm.find("burgers", 'devoured', true, function (res) {
            desiredAction(res);
        });
    },
    findNotDevoured: function (desiredAction) {
        orm.find("burgers", 'devoured', false, function (res) {
            desiredAction(res);
        });
    },
    addNew: function (burgerName, desiredAction) {
        orm.addNew("burgers", burgerName, function (res) {
            desiredAction(res);
        });
    }
}

module.exports = burger;