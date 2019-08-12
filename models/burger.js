var orm = require('./../config/orm.js')

var burger = {
    all: function(desiredAction) {
      orm.all("burgers", function(res) {
        desiredAction(res);
      });
    }
}

module.exports = burger;