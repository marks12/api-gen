
module.exports = {
    create: function (dataConfig, part) {
        var generator = require('./generator.js');

        generator.create(dataConfig,'route');
    }
}