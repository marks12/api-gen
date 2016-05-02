/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function (dataConfig, part) {
        var generator = require('./generator.js');

        generator.create(dataConfig,'model');
    }
}