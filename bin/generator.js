/**
 * Created by tsv on 02.05.16.
 */
/**
 * Created by tsv on 02.05.16.
 */

module.exports = {
    create: function (dataConfig, part) {

        var fs = require('fs');

        var partMaker = function (item) {

            var fs = require('fs');

            if(dataConfig.entities) {

                for (var i = 0; i < dataConfig.entities.length; i++) {

                    var entity = dataConfig.entities[i].nameMany.toLowerCase();
                    var routeContent = item.toString().replace(/Entity/g, dataConfig.entities[i].nameMany)
                        .replace(/entity/g, dataConfig.entities[i].nameMany.toLowerCase());

                    fs.writeFileSync(
                        __dirname + '/../../..' + '/api/' + part + 's/' + entity + '.js',
                        routeContent);
                }
            }
        };

        var createParts = function (parts) {

            var item = fs.readFileSync(__dirname + '/../templates/' + part + '.js');
            partMaker(item);

            if(parts) {

                fs.writeFileSync(
                    __dirname + '/../../..' + '/api/' + part + 's/' + part + 's.js',
                    parts.toString());
            }
        };

        var parts = null;

        if(fs.existsSync(__dirname + '/../templates/' + part + 's.js')) {
            parts = fs.readFileSync(__dirname + '/../templates/' + part + 's.js');
        }
        createParts(parts);
    }
};